/**
 * @swagger
 * components:
 *   schemas:
 *     MultipleSourceEntryGetRes:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: The global message of how requests have been processed
 *           example: SourceEntries successfully retrieved
 *         code:
 *           type: number
 *           description: This is a code that represents the status of all requests processed, 1 = success | 0 = fail
 *           example: 1
 *         serviceRes:
 *           type: object
 *           description: This is the content of the response data we want to retrieve
 *           properties:
 *             serviceReqMessage:
 *               type: string
 *               description: This is a message centralized on only one request and how it has been processed
 *               example: SourceEntries successfully retrieved
 *             serviceReqCode:
 *               type: number
 *               description: This is a code that represents the status of only one request processed, 1 = success | 0 = fail
 *               example: 1
 *             payload:
 *               type: array
 *               description: This is an array of objects you want to store / pull, here source-entries
 *               items:
 *                 $ref: '#/components/schemas/sourceEntryPayload'
 *     SourceEntryGetRes:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: The global message of how requests have been processed
 *           example: SourceEntries successfully retrieved
 *         code:
 *           type: number
 *           description: This is a code that represents the status of all requests processed, 1 = success | 0 = fail
 *           example: 1
 *         serviceRes:
 *           type: object
 *           description: This is the content of the response data we want to retrieve
 *           properties:
 *             serviceReqMessage:
 *               type: string
 *               description: This is a message centralized on only one request and how it has been processed
 *               example: SourceEntries successfully retrieved
 *             serviceReqCode:
 *               type: number
 *               description: This is a code that represents the status of only one request processed, 1 = success | 0 = fail
 *               example: 1
 *             payload:
 *               type: object
 *               description: This is an object you want to store / pull, here source-entry
 *               $ref: '#/components/schemas/sourceEntryPayload'
 *     sourceEntryPayload:
 *       type: object
 *       description: This is an object that represents all data of an source-entry
 *       properties:
 *         _id:
 *           type: string
 *           description: This is a unique id that represents one source-entry in MongoDB
 *           example: 6257c8798554a3502f8aa2d3
 *         pdfCreationStatus:
 *           type: number
 *           description: This is a code that reprensents the status of the pdf creation with that data, 1 = success | 0 = fail | 2 = to process
 *           example: 2
 *         otherData:
 *           type: string
 *           description: Not documented yet, could be array, object, string, number etc...
 *           example: Not documented yet, could be array, object, string, number etc...
 *     createSimpleSourceEntryReq:
 *       type: object
 *       description: This is an object that represents the informations of source-entry we want tot create
 *       properties:
 *         serviceReq:
 *           type: object
 *           properties:
 *             serviceReqId:
 *               description: This is a unique id that represents the request
 *               type: string
 *               example: 123e4567-e89b-12d3-a456-426614174000
 *             payload:
 *               $ref: '#/components/schemas/createSourceEntryReqPayload'
 *     simpleSourceEntryRes:
 *       type: object
 *       description: This is an object that will contain response about source-entry creation/update in MongoDb
 *       properties:
 *         message:
 *           type: string
 *           description: The global message of how requests have been processed
 *           example: SourceEntry has successfully been added/update to the database
 *         code:
 *           type: integer
 *           description: This is a code that represents the status of all requests processed, 1 = success | 0 = fail
 *           example: 1
 *         serviceRes:
 *           type: object
 *           description: This object will contains informations about on request processed
 *           properties:
 *             serviceReqId:
 *               type: string
 *               description: This is the id of the processed request
 *               example: 123e4567-e89b-12d3-a456-426614174000
 *             serviceReqMessage:
 *               type: string
 *               description: This is a message centralized on only one request and how it has been processed
 *               example: SourceEntry successfully created/updated
 *             serviceReqCode:
 *               type: integer
 *               description: This is a code that represents the status of only one request processed, 1 = success | 0 = fail
 *               example: 1
 *             payload:
 *               $ref: '#/components/schemas/sourceEntryIdsPayload'
 *     createMultipleSourceEntryReq:
 *       type: object
 *       description: This is an object that will contain all data needed to create multiple source-entries
 *       properties:
 *         serviceReq:
 *           type: object
 *           properties:
 *             serviceReqId:
 *               type: string
 *               description: This is the id of the processed request
 *               example: 123e4567-e89b-12d3-a456-426614174000
 *             payload:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/createSourceEntryReqPayload'
 *     multipleSourceEntryIdsResponse:
 *       type: object
 *       description: This is an object that represents all data of an sourceEntry
 *       properties:
 *         message:
 *           type: string
 *           description: The global message of how requests have been processed
 *           example: SourceEntry has successfully been added/updated to the database
 *         code:
 *           type: integer
 *           description: This is a code that represents the status of all requests processed, 1 = success | 0 = fail
 *           example: 1
 *         serviceRes:
 *           type: object
 *           description: This object will contains informations about on request processed
 *           properties:
 *             serviceReqId:
 *               type: string
 *               description: This is the id of the processed request
 *               example: 123e4567-e89b-12d3-a456-426614174000
 *             serviceReqMessage:
 *               type: string
 *               description: This is a message centralized on only one request and how it has been processed
 *               example: SourceEntry successfully created/updated
 *             serviceReqCode:
 *               type: integer
 *               description: This is a code that represents the status of only one request processed, 1 = success | 0 = fail
 *               example: 1
 *             payload:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/sourceEntryIdsPayload'
 *     createSourceEntryReqPayload:
 *       type: object
 *       description: This source-entry payload is a fake until i change this one to the real payload
 *       properties:
 *         name:
 *           type: string
 *           description: This is the name of the source-entry (will change in the future)
 *           example: sourceEntry1
 *     sourceEntryIdsPayload:
 *       type: object
 *       description: This payload contains an id of an source-entry (can be multiple if inside an array)
 *       properties:
 *         sourceEntryId:
 *           type: string
 *           description: This is the id of the (created, multiple, requested) source-entry inside MongoDB
 *           example: 6257c8798554a3502f8aa2d3
 *     getSourceEntryByIdsReq:
 *       type: object
 *       description: This is an object that will contain all data needed to get multiple source-entries
 *       properties:
 *         serviceReq:
 *           type: object
 *           properties:
 *             serviceReqId:
 *               type: string
 *               description: This is the id of the processed request
 *               example: 123e4567-e89b-12d3-a456-426614174000
 *             payload:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/sourceEntryIdsPayload'
 *     getSourceEntryByIdsRes:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: The global message of how requests have been processed
 *           example: SourceEntries have successfully been retrieved
 *         code:
 *           type: integer
 *           description: This is a code that represents the status of all requests processed, 1 = success | 0 = fail
 *           example: 1
 *         serviceRes:
 *           type: object
 *           description: This object will contains informations about on request processed
 *           properties:
 *             serviceReqId:
 *               type: string
 *               description: This is the id of the processed request
 *               example: 123e4567-e89b-12d3-a456-426614174000
 *             serviceReqMessage:
 *               type: string
 *               description: This is a message centralized on only one request and how it has been processed
 *               example: SourceEntry successfully created
 *             serviceReqCode:
 *               type: integer
 *               description: This is a code that represents the status of only one request processed, 1 = success | 0 = fail
 *               example: 1
 *             payload:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/sourceEntryPayload'
 *     updateSourceEntriesReq:
 *       type: object
 *       properties:
 *         serviceReq:
 *           type: array
 *           description: This is an array that will contain all data needed to update multiple source-entries
 *           items:
 *             type: object
 *             properties:
 *               serviceReqId:
 *                 type: string
 *                 description: This is the id of the processed request
 *                 example: 123e4567-e89b-12d3-a456-426614174000
 *               payload:
 *                 type: object
 *                 description: This payload will contains an array of ids and update to apply to them
 *                 properties:
 *                   filter:
 *                     type: object
 *                     description: Filter to apply to the collection
 *                     properties:
 *                       value:
 *                         type: string
 *                         description: Could be anything for the moment
 *                         example: This is an example of a filter
 *                   updates:
 *                     type: object
 *                     description: This is a object that contains updates to apply on each filtred data
 *                     properties:
 *                       Status:
 *                         type: integer
 *                         description: This is a value to update if process have been a success (1) or not (0)
 *                         example: 1
 *     updateSourceEntryReq:
 *       type: object
 *       properties:
 *         serviceReq:
 *           type: object
 *           description: This is an array that will contain all data needed to update multiple source-entries
 *           properties:
 *             serviceReqId:
 *               type: string
 *               description: This is the id of the processed request
 *               example: 123e4567-e89b-12d3-a456-426614174000
 *             payload:
 *               type: object
 *               description: This payload will contains an array of ids and update to apply to them
 *               properties:
 *                 sourceEntryId:
 *                   type: string
 *                   description: This is the source-entry id to update
 *                   example: 6259280e17322d1c45e7c453
 *                 updates:
 *                   type: object
 *                   description: This is a object that contains updates to apply on each id in the source-entry Ids
 *                   properties:
 *                     Status:
 *                       type: integer
 *                       description: This is a value to update if process have been a success (1) or not (0)
 *                       example: 1
 *     sourceEntryDeletedRes:
 *       type: object
 *       description: This response show if the source-entry has been deleted or not
 *       properties:
 *         message:
 *           type: string
 *           description: this is the message that indicates details about deletion
 *           example: Source-entry have successfully been deleted
 *         code:
 *           type: number
 *           description: this is the code that indicates details about deletion
 *           example: 1
 *         serviceRes:
 *           type: object
 *           properties:
 *             serviceReqMessage:
 *               type: string
 *               description: this is the message that indicates details about deletion
 *               example: Source-entry have successfully been deleted
 *             serviceReqCode:
 *               type: number
 *               description: this is the code that indicates details about deletion
 *               example: 1
 *             payload:
 *               type: object
 *               properties:
 *                 sourceEntryId:
 *                   type: string
 *                   description: The payload contains the id of the deleted source-entry
 *                   example: 628348c87d445a1778553f9d
 *     sourceEntriesDeletedReq:
 *       type: object
 *       description: This request contains all ids we want to delete
 *       properties:
 *         serviceReq:
 *           type: object
 *           properties:
 *             serviceReqId:
 *               type: string
 *               description: This is the id of the processed request
 *               example: 123e4567-e89b-12d3-a456-426614174000
 *             payload:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   sourceEntryId:
 *                     type: string
 *                     description: The payload contains the id of the deleted source-entry
 *                     example: 628348c87d445a1778553f9d
 *     sourceEntriesDeletedRes:
 *       type: object
 *       description: This response show if the source-entry has been deleted or not
 *       properties:
 *         message:
 *           type: string
 *           description: this is the message that indicates details about deletion
 *           example: Source-entry have successfully been deleted
 *         code:
 *           type: number
 *           description: this is the code that indicates details about deletion
 *           example: 1
 *         serviceRes:
 *           type: object
 *           properties:
 *             serviceReqId:
 *               type: string
 *               description: This is the id of the processed request
 *               example: 123e4567-e89b-12d3-a456-426614174000
 *             serviceReqMessage:
 *               type: string
 *               description: this is the message that indicates details about deletion
 *               example: Source-entry have successfully been deleted
 *             serviceReqCode:
 *               type: number
 *               description: this is the code that indicates details about deletion
 *               example: 1
 *             payload:
 *               type: object
 *               properties:
 *                 count:
 *                   type: number
 *                   description: This is the amount of deleted source-entries
 *                   example: 2
 *                 sourceEntryIds:
 *                   type: array
 *                   description: The payload contains the id of the deleted source-entry
 *                   items:
 *                     type: string
 *                     example: 628348c87d445a1778553f9d
 *     getSourceEntrySelectedColumnsReq:
 *       type: object
 *       description: This request allows you to customize how you want the get the result (example, with or without _id)
 *       properties:
 *         serviceReq:
 *           type: object
 *           properties:
 *             serviceReqId:
 *               type: string
 *               description: This is the id of the processed request
 *               example: 123e4567-e89b-12d3-a456-426614174000
 *             payload:
 *               type: object
 *               description: This payload will contains all the informations you want from the source-entry(s) requested
 *               properties:
 *                 filter:
 *                   type: object
 *                   description: This object contains filters you want to apply to the object (I only want source-entries with this or this _id)
 *                   properties:
 *                     filter1:
 *                       type: object
 *                       description: this could be an array or an object
 *                       example: the _id requested
 *                 columns:
 *                   description: This array will contains all informations you want ot retrieve from the source-entry(s) requested
 *                   type: string
 *                   example:
 *                     - entry1
 *                     - entry2
 *                     - entry3
 *     getSourceEntrySelectedColumnsRes:
 *       type: object
 *       description: This response show the data you wanted to retrieve
 *       properties:
 *         message:
 *           type: string
 *           description: The global message of how requests have been processed
 *           example: Source-entry have successfully been retrieved
 *         code:
 *           type: number
 *           description: this is the code that indicates details about retrieval
 *           example: 1
 *         serviceRes:
 *           type: object
 *           properties:
 *             serviceReqId:
 *               type: string
 *               description: This is the id of the processed request
 *               example: 123e4567-e89b-12d3-a456-426614174000
 *             serviceReqMessage:
 *               type: string
 *               description: this is the message that indicates details about retrieval
 *               example: Source-entries have successfully been retrieved
 *             serviceReqCode:
 *               type: number
 *               description: this is the code that indicates details about retrieval
 *               example: 1
 *             payload:
 *               type: array
 *               description: This payload is an array of retrieved source-entries
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: This is the id of the source-entry inside the database
 *                     example: 628348c87d445a1778553f9e
 *                   entry1:
 *                     example: Value of entry 1
 *                   entry2:
 *                     example: Value of entry 2
 *                   entry3:
 *                     example: Value of entry 3
 *     getSourceEntryDistinctValuesReq:
 *       type: object
 *       description: This request allows you to customize how you want the get the result (example, with or without _id)
 *       properties:
 *         serviceReq:
 *           type: object
 *           properties:
 *             serviceReqId:
 *               type: string
 *               description: This is the id of the processed request
 *               example: 123e4567-e89b-12d3-a456-426614174000
 *             payload:
 *               $ref: '#/components/schemas/getSourceEntryDistinctValuesReqPayload'
 *     getSourceEntryDistinctValuesReqPayload:
 *       type: object
 *       description: This payload will contains all the informations you want from the distinctValues requested
 *       properties:
 *         filter:
 *           type: object
 *           description: This object contains filters you want to apply to the object (I only want source-entries with this or this _id)
 *           properties:
 *             filter1:
 *               type: object
 *               description: this could be an array or an object
 *               example: the _id requested
 *         distinctValuesFor:
 *           description: This array will contains distinct values you want ot retrieve from distinct values requested
 *           type: string
 *           example:
 *             - entry1
 *             - entry2
 *     getSourceEntryDistinctValuesRes:
 *       type: object
 *       description: This response show the data you wanted to retrieve
 *       properties:
 *         message:
 *           type: string
 *           description: The global message of how requests have been processed
 *           example: Source-entry have successfully been retrieved
 *         code:
 *           type: number
 *           description: this is the code that indicates details about retrieval
 *           example: 1
 *         serviceRes:
 *           type: object
 *           properties:
 *             serviceReqId:
 *               type: string
 *               description: This is the id of the processed request
 *               example: 123e4567-e89b-12d3-a456-426614174000
 *             serviceReqMessage:
 *               type: string
 *               description: this is the message that indicates details about retrieval
 *               example: Source-entries have successfully been retrieved
 *             serviceReqCode:
 *               type: number
 *               description: this is the code that indicates details about retrieval
 *               example: 1
 *             payload:
 *               type: object
 *               description: This payload is an array of retrieved source-entries
 *               properties:
 *                 request:
 *                   $ref: '#/components/schemas/getSourceEntryDistinctValuesReqPayload'
 *                 result:
 *                   type: array
 *                   description: This array will contains each distinct values requested
 *                   items:
 *                     type: object
 *                     properties:
 *                       entry1:
 *                         example: A possible value of entry1
 *                       entry2:
 *                         example: A possible value of entry2
 *     updateMultipleSourceEntriesResponse:
 *       type: object
 *       description: This response show if the update was going well or not
 *       properties:
 *         message:
 *           type: string
 *           description: The global message of how requests have been processed
 *           example: Source-entries have successfully been updated
 *         code:
 *           type: number
 *           description: this is the code that indicates details about update
 *           example: 1
 *         serviceRes:
 *           type: object
 *           properties:
 *             serviceReqId:
 *               type: string
 *               description: This is the id of the processed request
 *               example: 123e4567-e89b-12d3-a456-426614174000
 *             serviceReqMessage:
 *               type: string
 *               description: this is the message that indicates details about update
 *               example: Source-Entries have successfully been updated
 *             serviceReqCode:
 *               type: number
 *               description: this is the code that indicates details about update
 *               example: 1
 *             payload:
 *               type: object
 *               description: This payload show informations about the processed update
 *               properties:
 *                 count:
 *                   type: number
 *                   description: This number show the amount of data updated in the DB
 *                   example: 2
 *                 appliedFilters:
 *                   type: object
 *                   description: This is the filters used to apply the updates in the DB
 *                   properties:
 *                     value:
 *                         type: string
 *                         description: Could be anything for the moment
 *                         example: This is an example of a filter
 *                 appliedUpdates:
 *                   type: object
 *                   description: This is an object that contains updates that have been applied on each filtred data
 *                   properties:
 *                     Status:
 *                       type: integer
 *                       description: This is a value to update if process have been a success (1) or not (0)
 *                       example: 1
 *     errorResponseObject:
 *       type: object
 *       description: This object is returned when an error occurs
 *       properties:
 *         timestamp:
 *           type: object
 *           description: This is date data about when does the error occurs in 2 formats
 *           properties:
 *             iso_8601:
 *               type: string
 *               description: Date of the request in iso_8601 format
 *               example: 2022-04-14T12:30:21+00:00
 *             epoch:
 *               type: number
 *               description: Date of the request in epoch format
 *               example: 1649939421477
 *         statusCode:
 *           type: number
 *           description: This is http status code of the http error
 *           example: 404
 *         description:
 *           type: string
 *           description: This is the global meaning of the http error
 *           example: The server can not find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 Forbidden to hide the existence of a resource from an unauthorized client. This response code is probably the most well known due to its frequent occurrence on the web
 *         message:
 *           type: string
 *           description: This is a message that represents the actual error
 *           example: Client error, The server cannot find the requested resource
 *         stack:
 *           type: string
 *           description: This is the full detailed error that should help developpers to correct
 *           example: Not found, Client error, The server cannot find the requested resource\n    at notFoundHandler (/home/centos/webapp/backend/node-pull-store/app-core/middleWares/postRequestMiddleWares/notFoundHandler/notFoundHandler.js:4:9)\n    at Layer.handle [as handle_request] (/home/centos/webapp/backend/node-pull-store/node_modules/express/lib/router/layer.js:95:5)\n    at trim_prefix (/home/centos/webapp/backend/node-pull-store/node_modules/express/lib/router/index.js:323:13)\n    at /home/centos/webapp/backend/node-pull-store/node_modules/express/lib/router/index.js:284:7\n    at Function.process_params (/home/centos/webapp/backend/node-pull-store/node_modules/express/lib/router/index.js:341:12)\n    at next (/home/centos/webapp/backend/node-pull-store/node_modules/express/lib/router/index.js:275:10)\n    at /home/centos/webapp/backend/node-pull-store/node_modules/express/lib/router/index.js:641:15\n    at next (/home/centos/webapp/backend/node-pull-store/node_modules/express/lib/router/index.js:260:14)\n    at Function.handle (/home/centos/webapp/backend/node-pull-store/node_modules/express/lib/router/index.js:174:3)\n    at router (/home/centos/webapp/backend/node-pull-store/node_modules/express/lib/router/index.js:47:12)
 */
