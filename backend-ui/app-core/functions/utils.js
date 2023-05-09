const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;
const { Base64 } = require('js-base64');
const _ = require('lodash');
const moment = require('moment');

const logger = require('../logger/logger')(module.filename);

const getFilesRecursive = (base, ext, files, result) => {
  files = files || fs.readdirSync(base);
  result = result || [];

  files.forEach(function (file) {
    const newbase = path.join(base, file);
    if (fs.statSync(newbase).isDirectory()) {
      result = getFilesRecursive(newbase, ext, fs.readdirSync(newbase), result);
    } else {
      if (file.substr(-1 * (ext.length + 1)) === '.' + ext) {
        result.push(newbase);
      }
    }
  });
  return result;
};

const arrayToDsv = (array, sep) => {
  const result = array.map((e) => e.join(sep)).join('\n');
  return result;
};

const base64Decode = (base64) => {
  const result = Base64.atob(base64);
  return result;
};

// Accepts an array of file information to be written on disk
// Writes are performed in parrallel
const writeFilesOnDisk = async (filesToWrite) => {
  // Let's make sure we have the expected object
  let filesToWriteValidated = [];
  if (!_.isEmpty(filesToWrite)) {
    // We take every object of the given array that has the right property
    filesToWriteValidated = filesToWrite.filter((fileToWrite) => {
      return (
        _.has(fileToWrite, 'filePathName') &&
        _.has(fileToWrite, 'fileData') &&
        _.has(fileToWrite, 'fileType')
      );
    });
  }

  // if the "validated" array is empty here, we got nothing to do as it was either
  // initially empty or we could not find any object in the array that looked ok
  if (_.isEmpty(filesToWriteValidated)) {
    return {
      fileName: null,
      filePath: null,
      writeResult: 'error',
      writeError: 'No valid file write request',
    };
  } else {
    let writeResults = [];
    // Let's write files for all "validated" write file requests, parrallel processing
    // We got the results when all the writes complete (promise resolves or rejects)
    writeResults = await Promise.allSettled(
      filesToWriteValidated.map(async (fileToWriteValidated) => {
        try {
          await fsPromises.writeFile(
            fileToWriteValidated.filePathName,
            fileToWriteValidated.fileData,
            fileToWriteValidated.fileType
          );

          // this will be available, for every promise (ie : file write) resolved
          // from the .status property of the object returned by Promise.allSettled
          return {
            fileName: path.basename(fileToWriteValidated.filePathName),
            filePath: path.dirname(fileToWriteValidated.filePathName),
            writeResult: 'success',
          };
        } catch (error) {
          // this will be available, for every promise (ie : file write) rejected
          // from the .status property of the object returned by Promise.allSettled
          return {
            fileName: path.basename(fileToWriteValidated.filePathName),
            filePath: path.dirname(fileToWriteValidated.filePathName),
            writeResult: 'error',
            writeError: error,
          };
        }
      })
    );

    // We only return the useful information, both success and write error are returned here
    return writeResults.map((writeResult) => {
      return writeResult.value;
    });
  }
};

// Accepts an array of file information to be moved on disk
// Moves are performed in parrallel
const moveFilesOnDisk = async (filesToMove) => {
  // Let's make sure we have the expected object
  let filesToMoveValidated = [];
  if (!_.isEmpty(filesToMove)) {
    // We take every object of the given array that has the right property
    filesToMoveValidated = filesToMove.filter((fileToMove) => {
      return (
        _.has(fileToMove, 'sourceFilePathName') && _.has(fileToMove, 'destinationFilePathName')
      );
    });
  }

  // if the "validated" array is empty here, we got nothing to do as it was either
  // initially empty or we could not find any object in the array that looked ok
  if (_.isEmpty(filesToMoveValidated)) {
    return {
      sourceFileName: null,
      sourceFilePath: null,
      destinationFileName: null,
      destinationFilePath: null,
      moveResult: 'error',
      moveError: 'No valid file move request',
    };
  } else {
    let moveResults = [];
    // Let's move files for all "validated" move file requests, parrallel processing
    // We got the results when all the moves complete (promise resolves or rejects)
    moveResults = await Promise.allSettled(
      filesToMoveValidated.map(async (fileToMoveValidated) => {
        try {
          await fsPromises.rename(
            fileToMoveValidated.sourceFilePathName,
            fileToMoveValidated.destinationFilePathName
          );

          // this will be available, for every promise (ie : file move) resolved
          // from the .status property of the object returned by Promise.allSettled
          return {
            sourceFileName: path.basename(fileToMoveValidated.sourceFilePathName),
            sourceFilePath: path.dirname(fileToMoveValidated.sourceFilePathName),
            destinationFileName: path.basename(fileToMoveValidated.destinationFilePathName),
            destinationFilePath: path.dirname(fileToMoveValidated.destinationFilePathName),
            moveResult: 'success',
          };
        } catch (error) {
          // this will be available, for every promise (ie : file move) rejected
          // from the .status property of the object returned by Promise.allSettled
          return {
            sourceFileName: path.basename(fileToMoveValidated.sourceFilePathName),
            sourceFilePath: path.dirname(fileToMoveValidated.sourceFilePathName),
            destinationFileName: path.basename(fileToMoveValidated.destinationFilePathName),
            destinationFilePath: path.dirname(fileToMoveValidated.destinationFilePathName),
            moveResult: 'error',
            moveError: error,
          };
        }
      })
    );

    // We only return the useful information, both success and move error are returned here
    return moveResults.map((moveResult) => {
      return moveResult.value;
    });
  }
};

const returnToClient = (code, message, responseObject, res, requestId) => {
  switch (code) {
    case /^2\d{2}/.test(code):
      logger.info(message);
      break;
    case /^4\d{2}/.test(code):
      logger.warn(message);
      break;
    case /^5\d{2}/.test(code):
      logger.error(message);
      break;
  }

  const objectToReturn = {
    requestId,
    timestamp: {
      iso_8601: moment().format(),
      epoch: moment().valueOf(),
    },
    message,
    responseObject,
  };

  return res.status(code).send(objectToReturn);
};

const utils = {
  getFilesRecursive,
  arrayToDsv,
  base64Decode,
  writeFilesOnDisk,
  moveFilesOnDisk,
  returnToClient,
};

module.exports = utils;
