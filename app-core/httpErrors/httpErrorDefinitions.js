// Let us define those error codes we might need to use from our code
// Other error codes can be added if necessary. See those references:

//  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
//  - https://datatracker.ietf.org/doc/html/rfc2616#section-10.4

//   Client error status codes
//     - 400 : Bad request              - The client produced a bad request
//     - 401 : Unauthorized             - The client is not authenticated
//     - 403 : Forbidden                - The client is not authorized
//     - 404 : Not found                - The server cannot find the requested resource
//     - 405 : Method not allowed       - The server does not support the requested method
//     - 408 : Request timeout          - The client connection seems idle and the server intents to close it
//     - 410 : Gone                     - The requested content has been permanently removed

//   Server error status codes
//     - 500 : Internal server error    - The server has encountered a situation it does not know how to handle
//     - 502 : Bad gateway              - The server received an invalid response from the gateway
//     - 503 : Service unavailable      - The server is not ready to handle the request
//     - 504 : Gateway timeout          - The server received a timeout from the gateway

const httpErrorDefinitions = [
  {
    identifier: 'badRequest',
    statusCode: 400,
    name: 'Bad request',
    message: 'Client error : The client produced a bad request',
    description: 'The server could not understand the request due to invalid syntax',
  },
  {
    identifier: 'unauthorized',
    statusCode: 401,
    name: 'Unauthorized',
    message: 'Client error : The client is not authenticated',
    description:
      'Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response',
  },
  {
    identifier: 'forbidden',
    statusCode: 403,
    name: 'Forbidden',
    message: 'Client error : The client is not authorized',
    description:
      "The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the server",
  },
  {
    identifier: 'notFound',
    statusCode: 404,
    name: 'Not found',
    message: 'Client error : The server cannot find the requested resource',
    description:
      'The server can not find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 Forbidden to hide the existence of a resource from an unauthorized client. This response code is probably the most well known due to its frequent occurrence on the web',
  },
  {
    identifier: 'methodNotAllowed',
    statusCode: 405,
    name: 'Method not allowed',
    message: 'Client error : The server does not support the requested method',
    description:
      'The request method is known by the server but is not supported by the target resource. For example, an API may not allow calling DELETE to remove a resource',
  },
  {
    identifier: 'requestTimeOut',
    statusCode: 408,
    name: 'Request timeout',
    message: 'Client error : The client connection seems idle and the server intents to close it',
    description:
      'This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection. This response is used much more since some browsers, like Chrome, Firefox 27+, or IE9, use HTTP pre-connection mechanisms to speed up surfing. Also note that some servers merely shut down the connection without sending this message',
  },
  {
    identifier: 'gone',
    statusCode: 410,
    name: 'Gone',
    message: 'Client error : The requested content has been permanently removed',
    description:
      'This response is sent when the requested content has been permanently deleted from server, with no forwarding address. Clients are expected to remove their caches and links to the resource. The HTTP specification intends this status code to be used for "limited-time, promotional services". APIs should not feel compelled to indicate resources that have been deleted with this status code',
  },
  {
    identifier: 'internalError',
    statusCode: 500,
    name: 'Internal error',
    message: 'Server error : The server has encountered a situation it does not know how to handle',
    description: 'The server has encountered a situation it does not know how to handle',
  },
  {
    identifier: 'badGateway',
    statusCode: 502,
    name: 'Bad gateway',
    message: 'Server error : The server received an invalid response from the gateway',
    description:
      'This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response',
  },
  {
    identifier: 'serviceUnavailable',
    statusCode: 503,
    name: 'Service unavailable',
    message: 'Server error : The server is not ready to handle the request',
    description:
      'The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent. This response should be used for temporary conditions and the Retry-After HTTP header should, if possible, contain the estimated time before the recovery of the service. The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached',
  },
  {
    identifier: 'gatewayTimeout',
    statusCode: 504,
    name: 'Gateway timeout',
    message: 'Server error : The server received a timeout from the gateway',
    description:
      'This error response is given when the server is acting as a gateway and cannot get a response in time',
  },
];

module.exports = httpErrorDefinitions;
