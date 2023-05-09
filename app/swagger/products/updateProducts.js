/**
 * @swagger
 * /api/product/update-multiple:
 *   put:
 *     summary: This request modify informations of multiple products into MongoDB and returns ids linked to them
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/updateProductsReq'
 *     responses:
 *       201:
 *         description: Success response with ids of updated products
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/updateMultipleProductsResponse'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/product:
 *   put:
 *     summary: This request modify informations of one product into MongoDB and returns id linked
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/updateProductReq'
 *     responses:
 *       201:
 *         description: Success response with the id of updated product
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/simpleProductRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */
