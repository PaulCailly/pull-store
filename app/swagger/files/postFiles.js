/**
 * @swagger
 * /api/file:
 *   post:
 *     summary: This request push an file into MongoDB and returns the id linked to it
 *     tags: [Files]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createSimpleFileReq'
 *     responses:
 *       201:
 *         description: Success response with the id of the created file
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/simpleFileRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/file/create-multiple:
 *   post:
 *     summary: This request push multiple files into MongoDB and returns ids linked to them
 *     tags: [Files]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createMultipleFileReq'
 *     responses:
 *       201:
 *         description: Success response with ids of created files
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/multipleFileIdsResponse'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/file/get-by-ids:
 *   post:
 *     summary: Returns a list of all requested files
 *     tags: [Files]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/getFileByIdsReq'
 *     responses:
 *       200:
 *         description: Success response with the list of requested files information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/getFileByIdsRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/file-summary/get-by-ids:
 *   post:
 *     summary: Returns a list of all requested files but not with all data, for example without createdAt and updatedAt values
 *     tags: [Files]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/getFileByIdsReq'
 *     responses:
 *       200:
 *         description: Success response with the list of requested files information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/getFileByIdsRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/file/delete-by-ids:
 *   post:
 *     summary: Delete a list of all files ids
 *     tags: [Files]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/getFileByIdsReq'
 *     responses:
 *       200:
 *         description: Success response with the list of requested files information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/getFileByIdsRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/file-summary/get-by-ids:
 *   post:
 *     summary: Returns a list of all requested files but not with all data, for example without createdAt and updatedAt values
 *     tags: [Files]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/getFileByIdsReq'
 *     responses:
 *       200:
 *         description: Success response with the list of requested files information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/getFileByIdsRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/file/delete-by-ids:
 *   post:
 *     summary: delete a list of files by id
 *     tags: [Files]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/filesDeletedReq'
 *     responses:
 *       200:
 *         description: Success response with the list of requested files information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/filesDeletedRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/file/get-selected-columns:
 *   post:
 *     summary: get the data from selected columns
 *     tags: [Files]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/getFileSelectedColumnsReq'
 *     responses:
 *       200:
 *         description: Success response with the list of requested files information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/getFileSelectedColumnsRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/file/get-distinct-values:
 *   post:
 *     summary: For this request, we send a post request with a filter to select which files we want to keep initially, and then request the distinct combined values taking into account the requested attributes.
 *     tags: [Files]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/getFileDistinctValuesReq'
 *     responses:
 *       200:
 *         description: Success response with the list of distinct values
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/getFileDistinctValuesRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */
