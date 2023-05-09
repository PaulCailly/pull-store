/**
 * @swagger
 * /api/tax-config/:
 *   get:
 *     summary: Returns a list of all tax-configs
 *     tags: [TaxConfigs]
 *     parameters:
 *       - in: query
 *         name: invoiceCreationStatus
 *         schema:
 *           type: integer
 *           description: This number represents the status of the invoice creation, succeeded = 1, failed = 0, waiting process = 2
 *           example: 1
 *     responses:
 *       200:
 *         description: Success response with the list of tax-configs information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MultipleTaxConfigGetRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/tax-config/{id}:
 *   get:
 *     summary: Returns an tax-config related to the tax-config id given
 *     tags: [TaxConfigs]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           description: This is the id of the tax-config we want to retrieve
 *           example: 6257ec3de833e07e45eadbe2
 *         required: true
 *     responses:
 *       200:
 *         description: Success response with all informations about wanted tax-config
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TaxConfigGetRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/tax-config-summary/:
 *   get:
 *     summary: Returns a list of all tax-configs but not with all data, for example without createdAt and updatedAt values
 *     tags: [TaxConfigs]
 *     parameters:
 *       - in: query
 *         name: invoiceCreationStatus
 *         schema:
 *           type: integer
 *           description: This number represents the status of the invoice creation, succeeded = 1, failed = 0, waiting process = 2
 *           example: 1
 *     responses:
 *       200:
 *         description: Success response with the list of tax-configs information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MultipleTaxConfigGetRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/tax-config-summary/{id}:
 *   get:
 *     summary: Returns an tax-config related to the tax-config id given but not with all data, for example without createdAt and updatedAt values
 *     tags: [TaxConfigs]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           description: This is the id of the tax-config we want to retrieve
 *           example: 6257ec3de833e07e45eadbe2
 *         required: true
 *     responses:
 *       200:
 *         description: Success response with all informations about wanted tax-config
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TaxConfigGetRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */
