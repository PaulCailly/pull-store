/**
 * @swagger
 * /api/product/:
 *   get:
 *     summary: Returns a list of all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Success response with the list of products information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MultipleProductGetRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/product/{id}:
 *   get:
 *     summary: Returns an product related to the product id given
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           description: This is the id of the product we want to retrieve
 *           example: 6257ec3de833e07e45eadbe2
 *         required: true
 *     responses:
 *       200:
 *         description: Success response with all informations about wanted product
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProductGetRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/product-summary/:
 *   get:
 *     summary: Returns a list of all products but not with all data, for example without createdAt and updatedAt values
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Success response with the list of products information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MultipleProductGetRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/product-summary/{id}:
 *   get:
 *     summary: Returns an product related to the product id given but not with all data, for example without createdAt and updatedAt values
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           description: This is the id of the product we want to retrieve
 *           example: 6257ec3de833e07e45eadbe2
 *         required: true
 *     responses:
 *       200:
 *         description: Success response with all informations about wanted product
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProductGetRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */
