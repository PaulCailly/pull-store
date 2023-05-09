/**
 * @swagger
 * /api/source:
 *   post:
 *     summary: This request push an source into MongoDB and returns the id linked to it
 *     tags: [Sources]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createSimpleSourceReq'
 *     responses:
 *       201:
 *         description: Success response with the id of the created source
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/simpleSourceRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/source/create-multiple:
 *   post:
 *     summary: This request push multiple sources into MongoDB and returns ids linked to them
 *     tags: [Sources]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createMultipleSourceReq'
 *     responses:
 *       201:
 *         description: Success response with ids of created sources
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/multipleSourceIdsResponse'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/source/get-by-ids:
 *   post:
 *     summary: Returns a list of all requested sources
 *     tags: [Sources]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/getSourceByIdsReq'
 *     responses:
 *       200:
 *         description: Success response with the list of requested sources information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/getSourceByIdsRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/source-summary/get-by-ids:
 *   post:
 *     summary: Returns a list of all requested sources but not with all data, for example without createdAt and updatedAt values
 *     tags: [Sources]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/getSourceByIdsReq'
 *     responses:
 *       200:
 *         description: Success response with the list of requested sources information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/getSourceByIdsRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/source/delete-by-ids:
 *   post:
 *     summary: delete a list of sources by id
 *     tags: [Sources]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/sourcesDeletedReq'
 *     responses:
 *       200:
 *         description: Success response with the list of requested sources information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/sourcesDeletedRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/source/get-selected-columns:
 *   post:
 *     summary: get the data from selected columns
 *     tags: [Sources]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/getSourceSelectedColumnsReq'
 *     responses:
 *       200:
 *         description: Success response with the list of requested sources information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/getSourceSelectedColumnsRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/source/get-distinct-values:
 *   post:
 *     summary: For this request, we send a post request with a filter to select which sources we want to keep initially, and then request the distinct combined values taking into account the requested attributes.
 *     tags: [Sources]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/getSourceDistinctValuesReq'
 *     responses:
 *       200:
 *         description: Success response with the list of distinct values
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/getSourceDistinctValuesRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */
