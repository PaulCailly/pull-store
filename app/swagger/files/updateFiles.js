/**
 * @swagger
 * /api/file/update-multiple:
 *   put:
 *     summary: This request modify informations of multiple files into MongoDB and returns ids linked to them
 *     tags: [Files]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/updateFilesReq'
 *     responses:
 *       201:
 *         description: Success response with ids of updated files
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/updateMultipleFilesResponse'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/file:
 *   put:
 *     summary: This request modify informations of one file into MongoDB and returns id linked
 *     tags: [Files]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/updateFileReq'
 *     responses:
 *       201:
 *         description: Success response with the id of updated file
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
