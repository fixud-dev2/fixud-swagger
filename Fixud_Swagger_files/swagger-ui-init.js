
window.onload = function() {
  // Build a system
  var url = window.location.search.match(/url=([^&]+)/);
  if (url && url.length > 1) {
    url = decodeURIComponent(url[1]);
  } else {
    url = window.location.origin;
  }
  var options = {
  "swaggerDoc": {
    "openapi": "3.0.0",
    "info": {
      "version": "v1.0.0",
      "title": "Fixud API Documentation",
      "description": "Fixud@Developer"
    },
    "tags": [
      {
        "name": "Fixud-Services",
        "description": ""
      },
      {
        "name": "Fixud-Service-Categories",
        "description": ""
      },
      {
        "name": "Fixud-Individual-Provider",
        "description": ""
      }
    ],
    "paths": {
      "/health": {
        "get": {
          "description": "",
          "responses": {
            "200": {
              "description": "OK"
            }
          }
        }
      },
      "/service/": {
        "post": {
          "tags": [
            "Fixud-Services"
          ],
          "description": "create a new Service",
          "parameters": [
            {
              "name": "x-access-token",
              "in": "header",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "default": {
              "description": ""
            }
          }
        },
        "get": {
          "tags": [
            "Fixud-Services"
          ],
          "description": "Retrieve all Services",
          "parameters": [
            {
              "name": "x-access-token",
              "in": "header",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "name",
              "in": "query",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "default": {
              "description": ""
            }
          }
        }
      },
      "/service/{id}": {
        "get": {
          "tags": [
            "Fixud-Services"
          ],
          "description": "Retrieve a single Service with id",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "x-access-token",
              "in": "header",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "default": {
              "description": ""
            }
          }
        },
        "put": {
          "tags": [
            "Fixud-Services"
          ],
          "description": "Update a Service with id",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "x-access-token",
              "in": "header",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "default": {
              "description": ""
            }
          }
        },
        "delete": {
          "tags": [
            "Fixud-Services"
          ],
          "description": "Delete a Service with id",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "x-access-token",
              "in": "header",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "default": {
              "description": ""
            }
          }
        }
      },
      "/service/{id}/activate": {
        "put": {
          "tags": [
            "Fixud-Services"
          ],
          "description": "Activate a service with id",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "x-access-token",
              "in": "header",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "default": {
              "description": ""
            }
          }
        }
      },
      "/service/{id}/deactivate": {
        "put": {
          "tags": [
            "Fixud-Services"
          ],
          "description": "Deactivate a service with id",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "x-access-token",
              "in": "header",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "default": {
              "description": ""
            }
          }
        }
      },
      "/service-category/": {
        "post": {
          "tags": [
            "Fixud-Service-Categories"
          ],
          "description": "create a new service category",
          "parameters": [
            {
              "name": "x-access-token",
              "in": "header",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "default": {
              "description": ""
            }
          },
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "name": {
                      "example": "any"
                    }
                  }
                }
              }
            }
          }
        },
        "get": {
          "tags": [
            "Fixud-Service-Categories"
          ],
          "description": "Retrieve all service categories",
          "parameters": [
            {
              "name": "x-access-token",
              "in": "header",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "name",
              "in": "query",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "default": {
              "description": ""
            }
          }
        }
      },
      "/service-category/{id}": {
        "get": {
          "tags": [
            "Fixud-Service-Categories"
          ],
          "description": "Retrieve a single service category with id",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "x-access-token",
              "in": "header",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "default": {
              "description": ""
            }
          }
        },
        "put": {
          "tags": [
            "Fixud-Service-Categories"
          ],
          "description": "Update a service category with id",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "x-access-token",
              "in": "header",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "default": {
              "description": ""
            }
          },
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "name": {
                      "example": "any"
                    },
                    "id": {
                      "example": "any"
                    }
                  }
                }
              }
            }
          }
        },
        "delete": {
          "tags": [
            "Fixud-Service-Categories"
          ],
          "description": "Delete a service category with id",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "x-access-token",
              "in": "header",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "default": {
              "description": ""
            }
          }
        }
      },
      "/service-category/{id}/activate": {
        "put": {
          "tags": [
            "Fixud-Service-Categories"
          ],
          "description": "Activate a service category with id",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "x-access-token",
              "in": "header",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "default": {
              "description": ""
            }
          }
        }
      },
      "/service-category/{id}/deactivate": {
        "put": {
          "tags": [
            "Fixud-Service-Categories"
          ],
          "description": "Deactivate a service category with id",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "x-access-token",
              "in": "header",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "default": {
              "description": ""
            }
          }
        }
      },
      "/individual-provider/": {
        "post": {
          "tags": [
            "Fixud-Individual-Provider"
          ],
          "description": "Register(create) a new provider(individual)",
          "responses": {
            "default": {
              "description": ""
            }
          },
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "password": {
                      "example": "any"
                    },
                    "userName": {
                      "example": "any"
                    },
                    "email": {
                      "example": "any"
                    },
                    "id": {
                      "example": "any"
                    }
                  }
                }
              }
            }
          }
        },
        "get": {
          "tags": [
            "Fixud-Individual-Provider"
          ],
          "description": "Retrieve all providers(individual)",
          "parameters": [
            {
              "name": "x-access-token",
              "in": "header",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "default": {
              "description": ""
            }
          }
        }
      },
      "/individual-provider/login": {
        "post": {
          "tags": [
            "Fixud-Individual-Provider"
          ],
          "description": "Login a provider(individual).",
          "responses": {
            "default": {
              "description": ""
            }
          },
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "email": {
                      "example": "any"
                    },
                    "password": {
                      "example": "any"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/individual-provider/{id}": {
        "get": {
          "tags": [
            "Fixud-Individual-Provider"
          ],
          "description": "Retrieve a single provider(individual) with id.",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "x-access-token",
              "in": "header",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "default": {
              "description": ""
            }
          }
        },
        "put": {
          "tags": [
            "Fixud-Individual-Provider"
          ],
          "description": "Update a provider(individual) with id",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "x-access-token",
              "in": "header",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "default": {
              "description": ""
            }
          }
        },
        "delete": {
          "tags": [
            "Fixud-Individual-Provider"
          ],
          "description": "Delete a provider(individual) with id",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "x-access-token",
              "in": "header",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "default": {
              "description": ""
            }
          }
        }
      }
    },
    "components": {
      "securitySchemes": {
        "apiKeyAuth": {
          "type": "apiKey",
          "in": "header",
          "name": "x-access-token",
          "description": "Some description..."
        }
      }
    }
  },
  "customOptions": {}
};
  url = options.swaggerUrl || url
  var urls = options.swaggerUrls
  var customOptions = options.customOptions
  var spec1 = options.swaggerDoc
  var swaggerOptions = {
    spec: spec1,
    url: url,
    urls: urls,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  }
  for (var attrname in customOptions) {
    swaggerOptions[attrname] = customOptions[attrname];
  }
  var ui = SwaggerUIBundle(swaggerOptions)

  if (customOptions.oauth) {
    ui.initOAuth(customOptions.oauth)
  }

  if (customOptions.preauthorizeApiKey) {
    const key = customOptions.preauthorizeApiKey.authDefinitionKey;
    const value = customOptions.preauthorizeApiKey.apiKeyValue;
    if (!!key && !!value) {
      const pid = setInterval(() => {
        const authorized = ui.preauthorizeApiKey(key, value);
        if(!!authorized) clearInterval(pid);
      }, 500)

    }
  }

  if (customOptions.authAction) {
    ui.authActions.authorize(customOptions.authAction)
  }

  window.ui = ui
}
