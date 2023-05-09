/**
 * @swagger
 * /api/tax-config:
 *   post:
 *     summary: This request push an tax-config into MongoDB and returns the id linked to it
 *     tags: [TaxConfigs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createSimpleTaxConfigReq'
 *     responses:
 *       201:
 *         description: Success response with the id of the created tax-config
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/simpleTaxConfigRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/tax-config/create-multiple:
 *   post:
 *     summary: This request push multiple tax-configs into MongoDB and returns ids linked to them
 *     tags: [TaxConfigs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createMultipleTaxConfigReq'
 *     responses:
 *       201:
 *         description: Success response with ids of created tax-configs
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/multipleTaxConfigIdsResponse'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/tax-config/get-by-ids:
 *   post:
 *     summary: Returns a list of all requested tax-configs
 *     tags: [TaxConfigs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/getTaxConfigByIdsReq'
 *     responses:
 *       200:
 *         description: Success response with the list of requested tax-configs information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/getTaxConfigByIdsRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/tax-config-summary/get-by-ids:
 *   post:
 *     summary: Returns a list of all requested tax-configs but not with all data, for example without createdAt and updatedAt values
 *     tags: [TaxConfigs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/getTaxConfigByIdsReq'
 *     responses:
 *       200:
 *         description: Success response with the list of requested tax-configs information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/getTaxConfigByIdsRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/tax-config/delete-by-ids:
 *   post:
 *     summary: delete a list of tax-configs by id
 *     tags: [TaxConfigs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/taxConfigsDeletedReq'
 *     responses:
 *       200:
 *         description: Success response with the list of requested tax-configs information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/taxConfigsDeletedRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/tax-config/get-selected-columns:
 *   post:
 *     summary: get the data from selected columns
 *     tags: [TaxConfigs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/getTaxConfigSelectedColumnsReq'
 *     responses:
 *       200:
 *         description: Success response with the list of requested tax-configs information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/getTaxConfigSelectedColumnsRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/tax-config/get-distinct-values:
 *   post:
 *     summary: For this request, we send a post request with a filter to select which tax-configs we want to keep initially, and then request the distinct combined values taking into account the requested attributes.
 *     tags: [TaxConfigs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/getTaxConfigDistinctValuesReq'
 *     responses:
 *       200:
 *         description: Success response with the list of distinct values
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/getTaxConfigDistinctValuesRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */
