/**
 * @swagger
 * /api/source/update-multiple:
 *   put:
 *     summary: This request modify informations of multiple sources into MongoDB and returns ids linked to them
 *     tags: [Sources]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/updateSourcesReq'
 *     responses:
 *       201:
 *         description: Success response with ids of updated sources
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/updateMultipleSourcesResponse'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/source:
 *   put:
 *     summary: This request modify informations of one source into MongoDB and returns id linked
 *     tags: [Sources]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/updateSourceReq'
 *     responses:
 *       201:
 *         description: Success response with the id of updated source
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
