/**
 * @swagger
 * /api/file/:
 *   get:
 *     summary: Returns a list of all files
 *     tags: [Files]
 *     responses:
 *       200:
 *         description: Success response with the list of files information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MultipleFileGetRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/file/{id}:
 *   get:
 *     summary: Returns an file related to the file id given
 *     tags: [Files]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           description: This is the id of the file we want to retrieve
 *           example: 6257ec3de833e07e45eadbe2
 *         required: true
 *     responses:
 *       200:
 *         description: Success response with all informations about wanted file
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FileGetRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/file-summary/:
 *   get:
 *     summary: Returns a list of all files but not with all data, for example without createdAt and updatedAt values
 *     tags: [Files]
 *     responses:
 *       200:
 *         description: Success response with the list of files information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MultipleFileGetRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/file-summary/{id}:
 *   get:
 *     summary: Returns an file related to the file id given but not with all data, for example without createdAt and updatedAt values
 *     tags: [Files]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           description: This is the id of the file we want to retrieve
 *           example: 6257ec3de833e07e45eadbe2
 *         required: true
 *     responses:
 *       200:
 *         description: Success response with all informations about wanted file
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FileGetRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */
