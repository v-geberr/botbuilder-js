/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a PetAP.
 */
class PetAP {
  /**
   * Create a PetAP.
   * @member {number} id
   * @member {string} [name]
   * @member {boolean} [status]
   * @member {string} odatalocation
   * @member {object} [additionalProperties1]
   */
  constructor() {
  }

  /**
   * Defines the metadata of PetAP
   *
   * @returns {object} metadata of PetAP
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PetAP',
      type: {
        name: 'Composite',
        additionalProperties: {
          type: {
            name: 'Dictionary',
            value: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        },
        className: 'PetAP',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'Number'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          eyeColor: {
            required: true,
            serializedName: 'eyeColor',
            isConstant: true,
            defaultValue: 'brown',
            type: {
              name: 'String'
            }
          },
          status: {
            required: false,
            readOnly: true,
            serializedName: 'status',
            type: {
              name: 'Boolean'
            }
          },
          odatalocation: {
            required: true,
            serializedName: '@odata\\.location',
            type: {
              name: 'String'
            }
          },
          additionalProperties1: {
            required: false,
            serializedName: 'additionalProperties',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'NumberElementType',
                  type: {
                    name: 'Number'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = PetAP;
