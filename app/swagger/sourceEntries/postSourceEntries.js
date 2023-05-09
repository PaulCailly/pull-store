/**
 * @swagger
 * /api/source-entry:
 *   post:
 *     summary: This request push an source-entry into MongoDB and returns the id linked to it
 *     tags: [SourceEntries]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createSimpleSourceEntryReq'
 *     responses:
 *       201:
 *         description: Success response with the id of the created source-entry
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/simpleSourceEntryRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/source-entry/create-multiple:
 *   post:
 *     summary: This request push multiple source-entries into MongoDB and returns ids linked to them
 *     tags: [SourceEntries]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createMultipleSourceEntryReq'
 *     responses:
 *       201:
 *         description: Success response with ids of created source-entries
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/multipleSourceEntryIdsResponse'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/source-entry/get-by-ids:
 *   post:
 *     summary: Returns a list of all requested source-entries
 *     tags: [SourceEntries]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/getSourceEntryByIdsReq'
 *     responses:
 *       200:
 *         description: Success response with the list of requested source-entries information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/getSourceEntryByIdsRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/source-entry-summary/get-by-ids:
 *   post:
 *     summary: Returns a list of all requested source-entries but not with all data, for example without createdAt and updatedAt values
 *     tags: [SourceEntries]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/getSourceEntryByIdsReq'
 *     responses:
 *       200:
 *         description: Success response with the list of requested source-entries information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/getSourceEntryByIdsRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/source-entry/delete-by-ids:
 *   post:
 *     summary: delete a list of source-entries by id
 *     tags: [SourceEntries]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/sourceEntriesDeletedReq'
 *     responses:
 *       200:
 *         description: Success response with the list of requested source-entries information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/sourceEntriesDeletedRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/source-entry/get-selected-columns:
 *   post:
 *     summary: get the data from selected columns
 *     tags: [SourceEntries]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/getSourceEntrySelectedColumnsReq'
 *     responses:
 *       200:
 *         description: Success response with the list of requested source-entries information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/getSourceEntrySelectedColumnsRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */

/**
 * @swagger
 * /api/source-entry/get-distinct-values:
 *   post:
 *     summary: For this request, we send a post request with a filter to select which source-entries we want to keep initially, and then request the distinct combined values taking into account the requested attributes.
 *     tags: [SourceEntries]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/getSourceEntryDistinctValuesReq'
 *     responses:
 *       200:
 *         description: Success response with the list of distinct values
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/getSourceEntryDistinctValuesRes'
 *       400:
 *         description: Error response with details of the error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/errorResponseObject'
 */
