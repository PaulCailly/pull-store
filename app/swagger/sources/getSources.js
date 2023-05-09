/**
 * @swagger
 * /api/source/:
 *   get:
 *     summary: Returns a list of all sources
 *     tags: [Sources]
 *     parameters:
 *       - in: query
 *         name: invoiceSourceCreationStatus
 *         schema:
 *           type: integer
 *           description: This number represents the status of the invoice-source creation, succeeded = 1, faile = 0, waiting process = 2
 *           example: 1
 *     responses:
 *       200:
 *         description: Success response with the list of sources information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MultipleSourceGetRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/source/{id}:
 *   get:
 *     summary: Returns an source related to the source id given
 *     tags: [Sources]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           description: This is the id of the source we want to retrieve
 *           example: 6257ec3de833e07e45eadbe2
 *         required: true
 *     responses:
 *       200:
 *         description: Success response with all informations about wanted source
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SourceGetRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/source-summary/:
 *   get:
 *     summary: Returns a list of all sources but not with all data, for example without createdAt and updatedAt values
 *     tags: [Sources]
 *     parameters:
 *       - in: query
 *         name: invoiceSourceCreationStatus
 *         schema:
 *           type: integer
 *           description: This number represents the status of the invoice-source creation, succeeded = 1, faile = 0, waiting process = 2
 *           example: 1
 *     responses:
 *       200:
 *         description: Success response with the list of sources information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MultipleSourceGetRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/source-summary/{id}:
 *   get:
 *     summary: Returns an source related to the source id given but not with all data, for example without createdAt and updatedAt values
 *     tags: [Sources]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           description: This is the id of the source we want to retrieve
 *           example: 6257ec3de833e07e45eadbe2
 *         required: true
 *     responses:
 *       200:
 *         description: Success response with all informations about wanted source
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SourceGetRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */
