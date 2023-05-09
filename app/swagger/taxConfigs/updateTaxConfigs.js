/**
 * @swagger
 * /api/tax-config/update-multiple:
 *   put:
 *     summary: This request modify informations of multiple tax-configs into MongoDB and returns ids linked to them
 *     tags: [TaxConfigs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/updateTaxConfigsReq'
 *     responses:
 *       201:
 *         description: Success response with ids of updated tax-configs
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/updateMultipleTaxConfigsResponse'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/tax-config:
 *   put:
 *     summary: This request modify informations of one tax-config into MongoDB and returns id linked
 *     tags: [TaxConfigs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/updateTaxConfigReq'
 *     responses:
 *       201:
 *         description: Success response with the id of updated tax-config
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
