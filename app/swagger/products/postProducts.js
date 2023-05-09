/**
 * @swagger
 * /api/product:
 *   post:
 *     summary: This request push an product into MongoDB and returns the id linked to it
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createSimpleProductReq'
 *     responses:
 *       201:
 *         description: Success response with the id of the created product
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

/**
 * @swagger
 * /api/product/create-multiple:
 *   post:
 *     summary: This request push multiple products into MongoDB and returns ids linked to them
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createMultipleProductReq'
 *     responses:
 *       201:
 *         description: Success response with ids of created products
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/multipleProductIdsResponse'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/product/get-by-ids:
 *   post:
 *     summary: Returns a list of all requested products
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/getProductByIdsReq'
 *     responses:
 *       200:
 *         description: Success response with the list of requested products information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/getProductByIdsRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/product-summary/get-by-ids:
 *   post:
 *     summary: Returns a list of all requested products but not with all data, for example without createdAt and updatedAt values
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/getProductByIdsReq'
 *     responses:
 *       200:
 *         description: Success response with the list of requested products information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/getProductByIdsRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/product/delete-by-ids:
 *   post:
 *     summary: Delete a list of all products ids
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/getProductByIdsReq'
 *     responses:
 *       200:
 *         description: Success response with the list of requested products information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/getProductByIdsRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/product-summary/get-by-ids:
 *   post:
 *     summary: Returns a list of all requested products but not with all data, for example without createdAt and updatedAt values
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/getProductByIdsReq'
 *     responses:
 *       200:
 *         description: Success response with the list of requested products information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/getProductByIdsRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/product/delete-by-ids:
 *   post:
 *     summary: delete a list of products by id
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/productsDeletedReq'
 *     responses:
 *       200:
 *         description: Success response with the list of requested products information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/productsDeletedRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/product/get-selected-columns:
 *   post:
 *     summary: get the data from selected columns
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/getProductSelectedColumnsReq'
 *     responses:
 *       200:
 *         description: Success response with the list of requested products information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/getProductSelectedColumnsRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/product/get-distinct-values:
 *   post:
 *     summary: For this request, we send a post request with a filter to select which products we want to keep initially, and then request the distinct combined values taking into account the requested attributes.
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/getProductDistinctValuesReq'
 *     responses:
 *       200:
 *         description: Success response with the list of distinct values
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/getProductDistinctValuesRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */
