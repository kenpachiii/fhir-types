/// <reference path="./fhir.d.ts" />

var example1: fhir.CapabilityStatement = {
    "resourceType": "CapabilityStatement",
    "id": "example",
    "url": "urn:uuid:68D043B5-9ECF-4559-A57A-396E0D452311",
    "version": "20130510",
    "name": "ACME-EHR",
    "title": "ACME EHR capability statement",
    "status": "draft",
    "experimental": true,
    "date": "2012-01-04",
    "publisher": "ACME Corporation",
    "contact": [
        {
            "name": "System Administrator",
            "telecom": [
                {
                    "system": "email",
                    "value": "wile@acme.org"
                }
            ]
        }
    ],
    "description": "This is the FHIR capability statement for the main EHR at ACME for the private interface - it does not describe the public interface",
    "useContext": [
        {
            "code": {
                "system": "http://terminology.hl7.org/CodeSystem/usage-context-type",
                "code": "focus"
            },
            "valueCodeableConcept": {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/variant-state",
                        "code": "positive"
                    }
                ]
            }
        }
    ],
    "jurisdiction": [
        {
            "coding": [
                {
                    "system": "urn:iso:std:iso:3166",
                    "code": "US",
                    "display": "United States of America (the)"
                }
            ]
        }
    ],
    "purpose": "Main EHR capability statement, published for contracting and operational support",
    "copyright": "Copyright © Acme Healthcare and GoodCorp EHR Systems",
    "kind": "instance",
    "instantiates": [
        "http://ihe.org/fhir/CapabilityStatement/pixm-client"
    ],
    "software": {
        "name": "EHR",
        "version": "0.00.020.2134",
        "releaseDate": "2012-01-04"
    },
    "implementation": {
        "description": "main EHR at ACME",
        "url": "http://10.2.3.4/fhir"
    },
    "fhirVersion": "4.0.1",
    "format": [
        "xml",
        "json"
    ],
    "patchFormat": [
        "application/xml-patch+xml",
        "application/json-patch+json"
    ],
    "implementationGuide": [
        "http://hl7.org/fhir/us/lab"
    ],
    "rest": [
        {
            "mode": "server",
            "documentation": "Main FHIR endpoint for acem health",
            "security": {
                "cors": true,
                "service": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/restful-security-service",
                                "code": "SMART-on-FHIR"
                            }
                        ]
                    }
                ],
                "description": "See Smart on FHIR documentation"
            },
            "resource": [
                {
                    "type": "Patient",
                    "profile": "http://registry.fhir.org/r4/StructureDefinition/7896271d-57f6-4231-89dc-dcc91eab2416",
                    "supportedProfile": [
                        "http://registry.fhir.org/r4/StructureDefinition/00ab9e7a-06c7-4f77-9234-4154ca1e3347"
                    ],
                    "documentation": "This server does not let the clients create identities.",
                    "interaction": [
                        {
                            "code": "read"
                        },
                        {
                            "code": "vread",
                            "documentation": "Only supported for patient records since 12-Dec 2012"
                        },
                        {
                            "code": "update"
                        },
                        {
                            "code": "history-instance"
                        },
                        {
                            "code": "create"
                        },
                        {
                            "code": "history-type"
                        }
                    ],
                    "versioning": "versioned-update",
                    "readHistory": true,
                    "updateCreate": false,
                    "conditionalCreate": true,
                    "conditionalRead": "full-support",
                    "conditionalUpdate": false,
                    "conditionalDelete": "not-supported",
                    "searchInclude": [
                        "Organization"
                    ],
                    "searchRevInclude": [
                        "Person"
                    ],
                    "searchParam": [
                        {
                            "name": "identifier",
                            "definition": "http://hl7.org/fhir/SearchParameter/Patient-identifier",
                            "type": "token",
                            "documentation": "Only supports search by institution MRN"
                        },
                        {
                            "name": "general-practitioner",
                            "definition": "http://hl7.org/fhir/SearchParameter/Patient-general-practitioner",
                            "type": "reference"
                        }
                    ]
                }
            ],
            "interaction": [
                {
                    "code": "transaction"
                },
                {
                    "code": "history-system"
                }
            ],
            "compartment": [
                "http://hl7.org/fhir/CompartmentDefinition/patient"
            ]
        }
    ],
    "messaging": [
        {
            "endpoint": [
                {
                    "protocol": {
                        "system": "http://terminology.hl7.org/CodeSystem/message-transport",
                        "code": "mllp"
                    },
                    "address": "mllp:10.1.1.10:9234"
                }
            ],
            "reliableCache": 30,
            "documentation": "ADT A08 equivalent for external system notifications",
            "supportedMessage": [
                {
                    "mode": "receiver",
                    "definition": "MessageDefinition/example"
                }
            ]
        }
    ],
    "document": [
        {
            "mode": "consumer",
            "documentation": "Basic rules for all documents in the EHR system",
            "profile": "http://fhir.hl7.org/base/Profilebc054d23-75e1-4dc6-aca5-838b6b1ac81d/_history/b5fdd9fc-b021-4ea1-911a-721a60663796"
        }
    ]
};

var example2: fhir.CodeSystem = {
    "resourceType": "CodeSystem",
    "id": "example-supplement",
    "meta": {
        "lastUpdated": "2019-11-01T09:29:23.356+11:00"
    },
    "extension": [
        {
            "url": "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
            "valueCode": "fhir"
        }
    ],
    "url": "http://hl7.org/fhir/CodeSystem/example-supplement",
    "version": "4.0.1",
    "name": "CholCodeLegacyStatus",
    "status": "draft",
    "experimental": true,
    "date": "2016-01-28",
    "publisher": "ACME Co",
    "contact": [
        {
            "name": "FHIR project team",
            "telecom": [
                {
                    "system": "url",
                    "value": "http://hl7.org/fhir"
                }
            ]
        }
    ],
    "content": "supplement",
    "supplements": "http://hl7.org/fhir/CodeSystem/example",
    "property": [
        {
            "code": "legacy",
            "description": "hether the test is currently performed",
            "type": "boolean"
        }
    ],
    "concept": [
        {
            "code": "chol-mmol",
            "property": [
                {
                    "code": "legacy",
                    "valueBoolean": false
                }
            ]
        },
        {
            "code": "chol-mass",
            "property": [
                {
                    "code": "legacy",
                    "valueBoolean": true
                }
            ]
        },
        {
            "code": "chol",
            "property": [
                {
                    "code": "legacy",
                    "valueBoolean": true
                }
            ]
        }
    ]
};

var example3: fhir.CodeSystem = {
    "resourceType": "CodeSystem",
    "id": "example",
    "meta": {
        "lastUpdated": "2019-11-01T09:29:23.356+11:00",
        "profile": [
            "http://hl7.org/fhir/StructureDefinition/shareablecodesystem"
        ]
    },
    "extension": [
        {
            "url": "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
            "valueCode": "fhir"
        }
    ],
    "url": "http://hl7.org/fhir/CodeSystem/example",
    "identifier": [
        {
            "system": "http://acme.com/identifiers/codesystems",
            "value": "internal-cholesterol-inl"
        }
    ],
    "version": "4.0.1",
    "name": "ACMECholCodesBlood",
    "title": "ACME Codes for Cholesterol in Serum/Plasma",
    "status": "draft",
    "experimental": true,
    "date": "2016-01-28",
    "publisher": "Acme Co",
    "contact": [
        {
            "name": "FHIR project team",
            "telecom": [
                {
                    "system": "url",
                    "value": "http://hl7.org/fhir"
                }
            ]
        }
    ],
    "description": "This is an example code system that includes all the ACME codes for serum/plasma cholesterol from v2.36.",
    "caseSensitive": true,
    "content": "complete",
    "filter": [
        {
            "code": "acme-plasma",
            "description": "An internal filter used to select codes that are only used with plasma",
            "operator": [
                "="
            ],
            "value": "the value of this filter is either 'true' or 'false'"
        }
    ],
    "concept": [
        {
            "code": "chol-mmol",
            "display": "SChol (mmol/L)",
            "definition": "Serum Cholesterol, in mmol/L",
            "designation": [
                {
                    "use": {
                        "system": "http://acme.com/config/fhir/codesystems/internal",
                        "code": "internal-label"
                    },
                    "value": "From ACME POC Testing"
                }
            ]
        },
        {
            "code": "chol-mass",
            "display": "SChol (mg/L)",
            "definition": "Serum Cholesterol, in mg/L",
            "designation": [
                {
                    "use": {
                        "system": "http://acme.com/config/fhir/codesystems/internal",
                        "code": "internal-label"
                    },
                    "value": "From Paragon Labs"
                }
            ]
        },
        {
            "code": "chol",
            "display": "SChol",
            "definition": "Serum Cholesterol",
            "designation": [
                {
                    "use": {
                        "system": "http://acme.com/config/fhir/codesystems/internal",
                        "code": "internal-label"
                    },
                    "value": "Obdurate Labs uses this with both kinds of units..."
                }
            ]
        }
    ]
};

var example4: fhir.CodeSystem = {
    "resourceType": "CodeSystem",
    "id": "examplescenario-actor-type",
    "meta": {
        "lastUpdated": "2019-11-01T09:29:23.356+11:00"
    },
    "extension": [
        {
            "url": "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
            "valueCode": "fhir"
        },
        {
            "url": "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
            "valueCode": "trial-use"
        },
        {
            "url": "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
            "valueInteger": 0
        }
    ],
    "url": "http://hl7.org/fhir/examplescenario-actor-type",
    "identifier": [
        {
            "system": "urn:ietf:rfc:3986",
            "value": "urn:oid:2.16.840.1.113883.4.642.4.859"
        }
    ],
    "version": "4.0.1",
    "name": "ExampleScenarioActorType",
    "title": "ExampleScenarioActorType",
    "status": "draft",
    "experimental": false,
    "date": "2019-11-01T09:29:23+11:00",
    "publisher": "HL7 (FHIR Project)",
    "contact": [
        {
            "telecom": [
                {
                    "system": "url",
                    "value": "http://hl7.org/fhir"
                },
                {
                    "system": "email",
                    "value": "fhir@lists.hl7.org"
                }
            ]
        }
    ],
    "description": "The type of actor - system or human.",
    "caseSensitive": true,
    "valueSet": "http://hl7.org/fhir/ValueSet/examplescenario-actor-type",
    "content": "complete",
    "concept": [
        {
            "code": "person",
            "display": "Person",
            "definition": "A person."
        },
        {
            "code": "entity",
            "display": "System",
            "definition": "A system."
        }
    ]
};

var example5: fhir.CodeSystem = {
    "resourceType": "CodeSystem",
    "id": "list-example-codes",
    "meta": {
        "lastUpdated": "2019-11-01T09:29:23.356+11:00",
        "profile": [
            "http://hl7.org/fhir/StructureDefinition/shareablecodesystem"
        ]
    },
    "extension": [
        {
            "url": "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
            "valueCode": "fhir"
        },
        {
            "url": "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
            "valueCode": "draft"
        },
        {
            "url": "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
            "valueInteger": 1
        }
    ],
    "url": "http://terminology.hl7.org/CodeSystem/list-example-use-codes",
    "identifier": [
        {
            "system": "urn:ietf:rfc:3986",
            "value": "urn:oid:2.16.840.1.113883.4.642.4.1105"
        }
    ],
    "version": "4.0.1",
    "name": "ExampleUseCodesForList",
    "title": "Example Use Codes for List",
    "status": "draft",
    "experimental": false,
    "publisher": "FHIR Project",
    "contact": [
        {
            "telecom": [
                {
                    "system": "url",
                    "value": "http://hl7.org/fhir"
                }
            ]
        }
    ],
    "description": "Example use codes for the List resource - typical kinds of use.",
    "caseSensitive": true,
    "valueSet": "http://hl7.org/fhir/ValueSet/list-example-codes",
    "content": "complete",
    "concept": [
        {
            "code": "alerts",
            "display": "Alerts",
            "definition": "A list of alerts for the patient."
        },
        {
            "code": "adverserxns",
            "display": "Adverse Reactions",
            "definition": "A list of part adverse reactions."
        },
        {
            "code": "allergies",
            "display": "Allergies",
            "definition": "A list of Allergies for the patient."
        },
        {
            "code": "medications",
            "display": "Medication List",
            "definition": "A list of medication statements for the patient."
        },
        {
            "code": "problems",
            "display": "Problem List",
            "definition": "A list of problems that the patient is known of have (or have had in the past)."
        },
        {
            "code": "worklist",
            "display": "Worklist",
            "definition": "A list of items that constitute a set of work to be performed (typically this code would be specialized for more specific uses, such as a ward round list)."
        },
        {
            "code": "waiting",
            "display": "Waiting List",
            "definition": "A list of items waiting for an event (perhaps a surgical patient waiting list)."
        },
        {
            "code": "protocols",
            "display": "Protocols",
            "definition": "A set of protocols to be followed."
        },
        {
            "code": "plans",
            "display": "Care Plans",
            "definition": "A set of care plans that apply in a particular context of care."
        }
    ]
};

var example6: fhir.CompartmentDefinition = {
    "resourceType": "CompartmentDefinition",
    "id": "example",
    "url": "http://hl7.org/fhir/CompartmentDefinition/example",
    "name": "EXAMPLE",
    "status": "draft",
    "experimental": true,
    "date": "2017-02-24",
    "publisher": "Health Level Seven International (FHIR Infrastructure)",
    "contact": [
        {
            "name": "[string]",
            "telecom": [
                {
                    "system": "url",
                    "value": "http://hl7.org/fhir"
                }
            ]
        }
    ],
    "description": "The set of resources associated with a particular Device (example with Communication and CommunicationRequest resourses only).",
    "useContext": [
        {
            "code": {
                "system": "http://terminology.hl7.org/CodeSystem/usage-context-type",
                "code": "focus"
            },
            "valueCodeableConcept": {
                "coding": [
                    {
                        "system": "http://hl7.org/fhir/resource-types",
                        "code": "Device"
                    }
                ]
            }
        }
    ],
    "purpose": "Provides an example of a FHIR compartment definition based on the Device resource type.",
    "code": "Device",
    "search": true,
    "resource": [
        {
            "code": "Communication",
            "param": [
                "sender",
                "recipient"
            ],
            "documentation": "The device used as the message sender and recipient"
        },
        {
            "code": "CommunicationRequest",
            "param": [
                "sender",
                "recipient"
            ],
            "documentation": "The device used as the message sender and recipient"
        }
    ]
};

var example7: fhir.ConceptMap = {
    "resourceType": "ConceptMap",
    "id": "example2",
    "meta": {
        "lastUpdated": "2019-11-01T09:29:23.356+11:00"
    },
    "url": "http://hl7.org/fhir/ConceptMap/example2",
    "version": "4.0.1",
    "name": "FHIR-exanple-2",
    "title": "FHIR Example 2",
    "status": "draft",
    "experimental": true,
    "date": "2012-06-13",
    "publisher": "HL7, Inc",
    "contact": [
        {
            "name": "FHIR project team (example)",
            "telecom": [
                {
                    "system": "url",
                    "value": "http://hl7.org/fhir"
                }
            ]
        }
    ],
    "description": "An example mapping",
    "purpose": "To illustrate mapping features",
    "sourceUri": "http://example.org/fhir/example1",
    "targetUri": "http://example.org/fhir/example2",
    "group": [
        {
            "source": "http://example.org/fhir/example1",
            "target": "http://example.org/fhir/example2",
            "element": [
                {
                    "code": "code",
                    "display": "Example Code",
                    "target": [
                        {
                            "code": "code2",
                            "display": "Some Example Code",
                            "equivalence": "equivalent",
                            "dependsOn": [
                                {
                                    "property": "http://example.org/fhir/property-value/example",
                                    "system": "http://example.org/fhir/example3",
                                    "value": "some-code",
                                    "display": "Something Coded"
                                }
                            ]
                        }
                    ]
                }
            ],
            "unmapped": {
                "mode": "other-map",
                "url": "http://example.org/fhir/ConceptMap/map2"
            }
        }
    ]
};

var example8: fhir.NamingSystem = {
    "resourceType": "NamingSystem",
    "id": "example-id",
    "name": "Austalian Healthcare Identifier - Individual",
    "status": "active",
    "kind": "identifier",
    "date": "2015-08-31",
    "publisher": "HL7 Australia on behalf of NEHTA",
    "contact": [
        {
            "name": "HL7 Australia FHIR Team",
            "telecom": [
                {
                    "system": "url",
                    "value": "http://hl7-australia.wikispaces.com/FHIR+Australia"
                }
            ]
        }
    ],
    "responsible": "HI Service Operator / NEHTA",
    "type": {
        "coding": [
            {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "NI",
                "display": "National unique individual identifier"
            }
        ],
        "text": "IHI"
    },
    "description": "Australian HI Identifier as established by relevant regulations etc.",
    "jurisdiction": [
        {
            "coding": [
                {
                    "system": "urn:iso:std:iso:3166",
                    "code": "AU"
                }
            ]
        }
    ],
    "usage": "Used in Australia for identifying patients",
    "uniqueId": [
        {
            "type": "oid",
            "value": "1.2.36.1.2001.1003.0",
            "comment": "This value is used in Australian CDA documents"
        },
        {
            "type": "uri",
            "value": "http://ns.electronichealth.net.au/id/hi/ihi/1.0",
            "preferred": true,
            "period": {
                "start": "2015-08-21"
            }
        }
    ]
};

var example9: fhir.NamingSystem = {
    "resourceType": "NamingSystem",
    "id": "example",
    "name": "SNOMED CT",
    "status": "active",
    "kind": "codesystem",
    "date": "2014-12-13",
    "publisher": "HL7 International on behalf of IHTSDO",
    "contact": [
        {
            "name": "FHIR project team",
            "telecom": [
                {
                    "system": "url",
                    "value": "http://hl7.org/fhir"
                }
            ]
        }
    ],
    "responsible": "IHTSDO & affiliates",
    "description": "SNOMED CT is a concept-based, scientifically validated terminology that provides a unique and permanent concept identifier that can be included in multiple HL7 data types including CD and CE.  The concepts are managed to avoid \"semantic drift\" so the meaning remains constant.  If the concept is found to be ambiguous or the meaning changes, the concept is inactivated but still retained and the identifier is never reused.    SNOMED CT's concepts are interrelated hierarchically and using description logic.    SNOMED CT concepts have a unique \"fully-specified name\", a preferred term, and, optionally, synonyms.  The description languages include English and Spanish.",
    "uniqueId": [
        {
            "type": "oid",
            "value": "2.16.840.1.113883.6.96"
        },
        {
            "type": "uri",
            "value": "http://snomed.info/sct",
            "preferred": true
        }
    ]
};

var example10: fhir.OperationDefinition = {
    "resourceType": "OperationDefinition",
    "id": "example",
    "url": "http://h7.org/fhir/OperationDefinition/example",
    "version": "B",
    "name": "Populate Questionnaire",
    "status": "draft",
    "kind": "operation",
    "date": "2015-08-04",
    "publisher": "Acme Healthcare Services",
    "contact": [
        {
            "name": "System Administrator",
            "telecom": [
                {
                    "system": "email",
                    "value": "beep@coyote.acme.com"
                }
            ]
        }
    ],
    "description": "Limited implementation of the Populate Questionnaire implementation",
    "useContext": [
        {
            "code": {
                "system": "http://build.fhir.org/codesystem-usage-context-type",
                "code": "venue",
                "display": "Clinical Venue"
            },
            "valueCodeableConcept": {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
                        "code": "IMP",
                        "display": "inpatient encounter"
                    }
                ]
            }
        }
    ],
    "jurisdiction": [
        {
            "coding": [
                {
                    "system": "urn:iso:std:iso:3166",
                    "code": "GB",
                    "display": "United Kingdom of Great Britain and Northern Ireland (the)"
                }
            ]
        }
    ],
    "code": "populate",
    "comment": "Only implemented for Labs and Medications so far",
    "base": "OperationDefinition/Questionnaire-populate",
    "resource": [
        "Questionnaire"
    ],
    "system": false,
    "type": false,
    "instance": true,
    "parameter": [
        {
            "name": "subject",
            "use": "in",
            "min": 1,
            "max": "1",
            "documentation": "The resource that is to be the *QuestionnaireResponse.subject*. The [[[QuestionnaireResponse]]]      instance will reference the provided subject.  In addition, if the *local* parameter is      set to true, server information about the specified subject will be used to populate the      instance.",
            "type": "Reference"
        },
        {
            "name": "local",
            "use": "in",
            "min": 0,
            "max": "1",
            "documentation": "If the *local* parameter is set to true, server information about the specified subject will be used to populate the instance.",
            "type": "Reference"
        },
        {
            "name": "return",
            "use": "out",
            "min": 1,
            "max": "1",
            "documentation": "The partially (or fully)-populated set of answers for the specified Questionnaire",
            "type": "QuestionnaireResponse"
        }
    ],
    "overload": [
        {
            "parameterName": [
                "subject",
                "local"
            ]
        },
        {
            "parameterName": [
                "subject"
            ],
            "comment": "local defaults to false when not passed as a parameter"
        }
    ]
};

var example11: fhir.SearchParameter = {
    "resourceType": "SearchParameter",
    "id": "example-extension",
    "url": "http://hl7.org/fhir/SearchParameter/example-extension",
    "name": "Example Search Parameter on an extension",
    "status": "draft",
    "experimental": true,
    "publisher": "Health Level Seven International (FHIR Infrastructure)",
    "contact": [
        {
            "telecom": [
                {
                    "system": "url",
                    "value": "http://hl7.org/fhir"
                }
            ]
        }
    ],
    "description": "Search by url for a participation agreement, which is stored in a DocumentReference",
    "code": "part-agree",
    "base": [
        "Patient"
    ],
    "type": "reference",
    "expression": "DocumentReference.extension('http://example.org/fhir/StructureDefinition/participation-agreement')",
    "xpath": "f:DocumentReference/f:extension[@url='http://example.org/fhir/StructureDefinition/participation-agreement']",
    "xpathUsage": "normal",
    "target": [
        "DocumentReference"
    ]
};

var example12: fhir.SearchParameter = {
    "resourceType": "SearchParameter",
    "id": "example-reference",
    "url": "http://hl7.org/fhir/SearchParameter/example-reference",
    "name": "Example Search Parameter",
    "status": "draft",
    "experimental": true,
    "date": "2013-10-23",
    "publisher": "Health Level Seven International (FHIR Infrastructure)",
    "contact": [
        {
            "name": "[string]",
            "telecom": [
                {
                    "system": "url",
                    "value": "http://hl7.org/fhir"
                }
            ]
        }
    ],
    "description": "Search by condition subject",
    "purpose": "Need to search Condition by subject",
    "code": "subject",
    "base": [
        "Condition"
    ],
    "type": "reference",
    "expression": "Condition.subject",
    "xpathUsage": "normal",
    "target": [
        "Organization"
    ],
    "modifier": [
        "missing"
    ],
    "chain": [
        "name",
        "identifier"
    ]
};

var example13: fhir.SearchParameter = {
    "resourceType": "SearchParameter",
    "id": "example",
    "url": "http://hl7.org/fhir/SearchParameter/example",
    "version": "1",
    "name": "ID-SEARCH-PARAMETER",
    "derivedFrom": "http://hl7.org/fhir/SearchParameter/Resource-id",
    "status": "draft",
    "experimental": true,
    "date": "2013-10-23",
    "publisher": "Health Level Seven International (FHIR Infrastructure)",
    "contact": [
        {
            "name": "[string]",
            "telecom": [
                {
                    "system": "url",
                    "value": "http://hl7.org/fhir"
                }
            ]
        }
    ],
    "description": "Search by resource identifier - e.g. same as the read interaction, but can return included resources",
    "useContext": [
        {
            "code": {
                "system": "http://terminology.hl7.org/CodeSystem/usage-context-type",
                "code": "focus"
            },
            "valueCodeableConcept": {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/variant-state",
                        "code": "positive"
                    }
                ]
            }
        }
    ],
    "jurisdiction": [
        {
            "coding": [
                {
                    "system": "urn:iso:std:iso:3166",
                    "code": "US",
                    "display": "United States of America (the)"
                }
            ]
        }
    ],
    "purpose": "Need to search by identifier for various infrastructural cases - mainly retrieving packages, and matching as part of a chain",
    "code": "_id",
    "base": [
        "Resource"
    ],
    "type": "token",
    "expression": "id",
    "xpath": "f:*/f:id",
    "xpathUsage": "normal",
    "comparator": [
        "eq"
    ]
};

var example14: fhir.StructureDefinition = {
    "resourceType": "StructureDefinition",
    "id": "example-composition",
    "url": "http://hl7.org/fhir/StructureDefinition/example-composition",
    "name": "DocumentStructure",
    "title": "Document Structure (For testing section templates)",
    "status": "active",
    "experimental": false,
    "date": "2018-11-05T17:47:00+11:00",
    "kind": "complex-type",
    "abstract": false,
    "type": "Composition",
    "baseDefinition": "http://hl7.org/fhir/StructureDefinition/Composition",
    "derivation": "constraint",
    "differential": {
        "element": [
            {
                "id": "Composition",
                "path": "Composition"
            },
            {
                "id": "Composition.section",
                "path": "Composition.section",
                "slicing": {
                    "discriminator": [
                        {
                            "type": "pattern",
                            "path": "code"
                        }
                    ],
                    "description": "Slice by .section.code",
                    "ordered": true,
                    "rules": "closed"
                }
            },
            {
                "id": "Composition.section:procedure",
                "path": "Composition.section",
                "sliceName": "procedure",
                "min": 1,
                "type": [
                    {
                        "code": "BackboneElement",
                        "profile": [
                            "http://hl7.org/fhir/StructureDefinition/document-section-library"
                        ],
                        "_profile": [
                            {
                                "extension": [
                                    {
                                        "url": "http://hl7.org/fhir/StructureDefinition/elementdefinition-profile-element",
                                        "valueString": "Composition.section:procedure"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id": "Composition.section:medications",
                "path": "Composition.section",
                "sliceName": "medications",
                "min": 1,
                "type": [
                    {
                        "code": "BackboneElement",
                        "profile": [
                            "http://hl7.org/fhir/StructureDefinition/document-section-library"
                        ],
                        "_profile": [
                            {
                                "extension": [
                                    {
                                        "url": "http://hl7.org/fhir/StructureDefinition/elementdefinition-profile-element",
                                        "valueString": "Composition.section:medications"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id": "Composition.section:plan",
                "path": "Composition.section",
                "sliceName": "plan",
                "min": 0,
                "type": [
                    {
                        "code": "BackboneElement",
                        "profile": [
                            "http://hl7.org/fhir/StructureDefinition/document-section-library"
                        ],
                        "_profile": [
                            {
                                "extension": [
                                    {
                                        "url": "http://hl7.org/fhir/StructureDefinition/elementdefinition-profile-element",
                                        "valueString": "Composition.section:plan"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
};

var example15: fhir.StructureDefinition = {
    "resourceType": "StructureDefinition",
    "id": "example-section-library",
    "url": "http://hl7.org/fhir/StructureDefinition/example-section-library",
    "name": "DocumentSectionLibrary",
    "title": "Document Section Library (For testing section templates)",
    "status": "active",
    "experimental": false,
    "date": "2018-11-05T17:57:00+11:00",
    "kind": "complex-type",
    "abstract": true,
    "type": "Composition",
    "baseDefinition": "http://hl7.org/fhir/StructureDefinition/Composition",
    "derivation": "constraint",
    "differential": {
        "element": [
            {
                "id": "Composition",
                "path": "Composition"
            },
            {
                "id": "Composition.section",
                "path": "Composition.section",
                "slicing": {
                    "discriminator": [
                        {
                            "type": "pattern",
                            "path": "code"
                        }
                    ],
                    "description": "Slice by .section.code when using this library of sections",
                    "ordered": true,
                    "rules": "closed"
                }
            },
            {
                "id": "Composition.section:procedure",
                "path": "Composition.section",
                "sliceName": "procedure"
            },
            {
                "id": "Composition.section:procedure.title",
                "path": "Composition.section.title",
                "min": 1,
                "fixedString": "Procedures Performed"
            },
            {
                "id": "Composition.section:procedure.code",
                "path": "Composition.section.code",
                "min": 1,
                "patternCodeableConcept": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "29554-3",
                            "display": "Procedure Narrative"
                        }
                    ]
                }
            },
            {
                "id": "Composition.section:medications",
                "path": "Composition.section",
                "sliceName": "medications"
            },
            {
                "id": "Composition.section:medications.title",
                "path": "Composition.section.title",
                "min": 1,
                "fixedString": "Medications Administered"
            },
            {
                "id": "Composition.section:medications.code",
                "path": "Composition.section.code",
                "min": 1,
                "patternCodeableConcept": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "29549-3",
                            "display": "Medication administered Narrative"
                        }
                    ]
                }
            },
            {
                "id": "Composition.section:plan",
                "path": "Composition.section",
                "sliceName": "plan"
            },
            {
                "id": "Composition.section:plan.title",
                "path": "Composition.section.title",
                "min": 1,
                "fixedString": "Discharge Treatment Plan"
            },
            {
                "id": "Composition.section:plan.code",
                "path": "Composition.section.code",
                "min": 1,
                "patternCodeableConcept": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "18776-5",
                            "display": "Plan of treatment (narrative)"
                        }
                    ]
                }
            }
        ]
    }
};

var example16: fhir.StructureMap = {
    "resourceType": "StructureMap",
    "id": "example",
    "url": "http://hl7.org/fhir/StructureMap/example",
    "identifier": [
        {
            "system": "urn:ietf:rfc:3986",
            "value": "urn:oid:37843577-95fb-4adb-84c0-8837188a7bf3"
        }
    ],
    "version": "0.1",
    "name": "ExampleMap",
    "title": "Example Map",
    "status": "draft",
    "date": "2017-03-09",
    "publisher": "HL7 FHIR Standard",
    "contact": [
        {
            "telecom": [
                {
                    "system": "url",
                    "value": "http://hl7.org/fhir"
                }
            ]
        }
    ],
    "description": "Example Structure Map",
    "jurisdiction": [
        {
            "coding": [
                {
                    "system": "http://unstats.un.org/unsd/methods/m49/m49.htm",
                    "code": "009",
                    "display": "Oceania"
                }
            ]
        }
    ],
    "group": [
        {
            "name": "Examples",
            "typeMode": "none",
            "documentation": "test -> testValue",
            "input": [
                {
                    "name": "test",
                    "mode": "source"
                }
            ],
            "rule": [
                {
                    "name": "rule1",
                    "source": [
                        {
                            "context": "Source",
                            "type": "SourceClassA",
                            "element": "test",
                            "variable": "t"
                        }
                    ],
                    "target": [
                        {
                            "context": "Destination",
                            "contextType": "variable",
                            "element": "testValue",
                            "transform": "copy"
                        }
                    ]
                }
            ]
        }
    ]
};

var example17: fhir.ValueSet = {
    "resourceType": "ValueSet",
    "id": "example-expansion",
    "meta": {
        "lastUpdated": "2019-11-01T09:29:23.356+11:00",
        "profile": [
            "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
        ]
    },
    "extension": [
        {
            "url": "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
            "valueCode": "fhir"
        }
    ],
    "url": "http://hl7.org/fhir/ValueSet/example-expansion",
    "version": "4.0.1",
    "name": "LOINC Codes for Cholesterol in Serum/Plasma",
    "status": "draft",
    "experimental": true,
    "date": "2015-06-22",
    "publisher": "FHIR Project team",
    "contact": [
        {
            "telecom": [
                {
                    "system": "url",
                    "value": "http://hl7.org/fhir"
                }
            ]
        }
    ],
    "description": "This is an example value set that includes all the LOINC codes for serum/plasma cholesterol from v2.36.",
    "copyright": "This content from LOINC® is copyright © 1995 Regenstrief Institute, Inc. and the LOINC Committee, and available at no cost under the license at http://loinc.org/terms-of-use.",
    "compose": {
        "include": [
            {
                "system": "http://loinc.org",
                "filter": [
                    {
                        "property": "parent",
                        "op": "=",
                        "value": "LP43571-6"
                    }
                ]
            }
        ]
    },
    "expansion": {
        "extension": [
            {
                "url": "http://hl7.org/fhir/StructureDefinition/valueset-expansionSource",
                "valueUri": "http://hl7.org/fhir/ValueSet/example-extensional"
            }
        ],
        "identifier": "urn:uuid:42316ff8-2714-4680-9980-f37a6d1a71bc",
        "timestamp": "2015-06-22T13:56:07Z",
        "total": 8,
        "offset": 0,
        "parameter": [
            {
                "name": "version",
                "valueString": "2.50"
            }
        ],
        "contains": [
            {
                "system": "http://loinc.org",
                "version": "2.50",
                "code": "14647-2",
                "display": "Cholesterol [Moles/volume] in Serum or Plasma"
            },
            {
                "abstract": true,
                "display": "Cholesterol codes",
                "contains": [
                    {
                        "system": "http://loinc.org",
                        "version": "2.50",
                        "code": "2093-3",
                        "display": "Cholesterol [Mass/volume] in Serum or Plasma"
                    },
                    {
                        "system": "http://loinc.org",
                        "version": "2.50",
                        "code": "48620-9",
                        "display": "Cholesterol [Mass/volume] in Serum or Plasma ultracentrifugate"
                    },
                    {
                        "system": "http://loinc.org",
                        "version": "2.50",
                        "code": "9342-7",
                        "display": "Cholesterol [Percentile]"
                    }
                ]
            },
            {
                "abstract": true,
                "display": "Cholesterol Ratios",
                "contains": [
                    {
                        "system": "http://loinc.org",
                        "version": "2.50",
                        "code": "2096-6",
                        "display": "Cholesterol/Triglyceride [Mass Ratio] in Serum or Plasma"
                    },
                    {
                        "system": "http://loinc.org",
                        "version": "2.50",
                        "code": "35200-5",
                        "display": "Cholesterol/Triglyceride [Mass Ratio] in Serum or Plasma"
                    },
                    {
                        "system": "http://loinc.org",
                        "version": "2.50",
                        "code": "48089-7",
                        "display": "Cholesterol/Apolipoprotein B [Molar ratio] in Serum or Plasma"
                    },
                    {
                        "system": "http://loinc.org",
                        "version": "2.50",
                        "code": "55838-7",
                        "display": "Cholesterol/Phospholipid [Molar ratio] in Serum or Plasma"
                    }
                ]
            }
        ]
    }
};

var example18: fhir.ValueSet = {
    "resourceType": "ValueSet",
    "id": "example-extensional",
    "meta": {
        "lastUpdated": "2019-11-01T09:29:23.356+11:00",
        "profile": [
            "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
        ]
    },
    "extension": [
        {
            "url": "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
            "valueCode": "fhir"
        }
    ],
    "url": "http://hl7.org/fhir/ValueSet/example-extensional",
    "identifier": [
        {
            "system": "http://acme.com/identifiers/valuesets",
            "value": "loinc-cholesterol-int"
        }
    ],
    "version": "4.0.1",
    "name": "LOINC Codes for Cholesterol in Serum/Plasma",
    "status": "draft",
    "experimental": true,
    "date": "2015-06-22",
    "publisher": "HL7 International",
    "contact": [
        {
            "name": "FHIR project team",
            "telecom": [
                {
                    "system": "url",
                    "value": "http://hl7.org/fhir"
                }
            ]
        }
    ],
    "description": "This is an example value set that includes all the LOINC codes for serum/plasma cholesterol from v2.36.",
    "useContext": [
        {
            "code": {
                "system": "http://terminology.hl7.org/CodeSystem/usage-context-type",
                "code": "age"
            },
            "valueQuantity": {
                "value": 18,
                "comparator": ">",
                "unit": "yrs",
                "system": "http://unitsofmeasure.org",
                "code": "a"
            }
        }
    ],
    "jurisdiction": [
        {
            "coding": [
                {
                    "system": "urn:iso:std:iso:3166",
                    "code": "US"
                }
            ]
        }
    ],
    "purpose": "This value set was published by ACME Inc in order to make clear which codes are used for Cholesterol by AcmeClinicals (Adult Ambulatory care support in USA)",
    "copyright": "This content from LOINC ® is copyright © 1995 Regenstrief Institute, Inc. and the LOINC Committee, and available at no cost under the license at http://loinc.org/terms-of-use.",
    "compose": {
        "lockedDate": "2012-06-13",
        "inactive": true,
        "include": [
            {
                "system": "http://loinc.org",
                "version": "2.36",
                "concept": [
                    {
                        "code": "14647-2",
                        "display": "Cholesterol [Moles/Volume]"
                    },
                    {
                        "code": "2093-3",
                        "display": "Cholesterol [Mass/Volume]"
                    },
                    {
                        "code": "35200-5",
                        "display": "Cholesterol [Mass Or Moles/Volume]"
                    },
                    {
                        "code": "9342-7",
                        "display": "Cholesterol [Percentile]"
                    }
                ]
            }
        ]
    }
};

var example19: fhir.ValueSet = {
    "resourceType": "ValueSet",
    "id": "example-filter",
    "meta": {
        "lastUpdated": "2019-11-01T09:29:23.356+11:00"
    },
    "extension": [
        {
            "url": "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
            "valueCode": "fhir"
        }
    ],
    "url": "http://hl7.org/fhir/ValueSet/example-filter",
    "version": "4.0.1",
    "name": "ACMECholCodesPlasma",
    "title": "ACME Codes for Cholesterol: Plasma only",
    "status": "draft",
    "experimental": true,
    "date": "2018-11-01",
    "publisher": "HL7 International",
    "contact": [
        {
            "name": "FHIR project team",
            "telecom": [
                {
                    "system": "url",
                    "value": "http://hl7.org/fhir"
                }
            ]
        }
    ],
    "description": "ACME Codes for Cholesterol: Plasma only - demonstrating the use of a filter defined in a CodeSystem",
    "compose": {
        "include": [
            {
                "system": "http://hl7.org/fhir/CodeSystem/example",
                "filter": [
                    {
                        "property": "acme-plasma",
                        "op": "=",
                        "value": "true"
                    }
                ]
            }
        ]
    }
};

var example20: fhir.ValueSet = {
    "resourceType": "ValueSet",
    "id": "example-hierarchical",
    "meta": {
        "lastUpdated": "2019-11-01T09:29:23.356+11:00",
        "profile": [
            "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
        ]
    },
    "contained": [
        {
            "resourceType": "CodeSystem",
            "id": "hacked",
            "url": "http://hl7.org/fhir/hacked",
            "status": "draft",
            "description": "Issue type in an error message - hack from real FHIR List",
            "content": "complete",
            "property": [
                {
                    "code": "notSelectable",
                    "uri": "http://hl7.org/fhir/concept-properties#notSelectable",
                    "type": "boolean"
                }
            ],
            "concept": [
                {
                    "code": "invalid",
                    "display": "Invalid Content",
                    "property": [
                        {
                            "code": "notSelectable",
                            "valueBoolean": true
                        }
                    ],
                    "concept": [
                        {
                            "code": "structure",
                            "display": "Structural Issue"
                        },
                        {
                            "code": "required",
                            "display": "Required element missing"
                        },
                        {
                            "code": "value",
                            "display": "Element value invalid"
                        }
                    ]
                },
                {
                    "code": "security",
                    "display": "Security Problem",
                    "property": [
                        {
                            "code": "notSelectable",
                            "valueBoolean": true
                        }
                    ],
                    "concept": [
                        {
                            "code": "login",
                            "display": "Login Required"
                        },
                        {
                            "code": "unknown",
                            "display": "Unknown User"
                        },
                        {
                            "code": "expired",
                            "display": "Session Expired"
                        }
                    ]
                },
                {
                    "code": "processing",
                    "display": "Processing Failure",
                    "concept": [
                        {
                            "code": "duplicate",
                            "display": "Duplicate"
                        },
                        {
                            "code": "not-found",
                            "display": "Not Found"
                        },
                        {
                            "code": "conflict",
                            "display": "Edit Version Conflict"
                        }
                    ]
                },
                {
                    "code": "transient",
                    "display": "Transient Issue",
                    "concept": [
                        {
                            "code": "lock-error",
                            "display": "Lock Error"
                        },
                        {
                            "code": "exception",
                            "display": "Exception"
                        },
                        {
                            "code": "throttled",
                            "display": "Throttled"
                        }
                    ]
                }
            ]
        }
    ],
    "extension": [
        {
            "url": "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
            "valueCode": "fhir"
        }
    ],
    "url": "http://hl7.org/fhir/ValueSet/example-hierarchical",
    "version": "4.0.1",
    "name": "Example Hierarchical ValueSet",
    "status": "draft",
    "experimental": true,
    "date": "2018-07-20",
    "publisher": "FHIR Project team",
    "contact": [
        {
            "telecom": [
                {
                    "system": "url",
                    "value": "http://hl7.org/fhir"
                }
            ]
        }
    ],
    "description": "Demonstration of extensions that build a hierarchical contains",
    "compose": {
        "include": [
            {
                "extension": [
                    {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-expand-rules",
                        "valueCode": "groups-only"
                    },
                    {
                        "extension": [
                            {
                                "url": "display",
                                "valueString": "(Most common)"
                            },
                            {
                                "url": "member",
                                "valueCode": "login"
                            },
                            {
                                "url": "member",
                                "valueCode": "conflict"
                            }
                        ],
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-expand-group"
                    },
                    {
                        "extension": [
                            {
                                "url": "code",
                                "valueCode": "processing"
                            },
                            {
                                "url": "member",
                                "valueCode": "duplicate"
                            },
                            {
                                "url": "member",
                                "valueCode": "not-found"
                            }
                        ],
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-expand-group"
                    },
                    {
                        "extension": [
                            {
                                "url": "code",
                                "valueCode": "invalid"
                            },
                            {
                                "url": "member",
                                "valueCode": "structure"
                            },
                            {
                                "url": "member",
                                "valueCode": "required"
                            },
                            {
                                "url": "member",
                                "valueCode": "value"
                            }
                        ],
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-expand-group"
                    },
                    {
                        "extension": [
                            {
                                "url": "code",
                                "valueCode": "transient"
                            },
                            {
                                "url": "member",
                                "valueCode": "lock"
                            },
                            {
                                "url": "member",
                                "valueCode": "exception"
                            },
                            {
                                "url": "member",
                                "valueCode": "throttled"
                            }
                        ],
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-expand-group"
                    },
                    {
                        "extension": [
                            {
                                "url": "code",
                                "valueCode": "security"
                            },
                            {
                                "url": "member",
                                "valueCode": "login"
                            },
                            {
                                "url": "member",
                                "valueCode": "unknown"
                            }
                        ],
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-expand-group"
                    }
                ],
                "system": "#hacked",
                "concept": [
                    {
                        "code": "invalid"
                    },
                    {
                        "code": "structure"
                    },
                    {
                        "code": "required"
                    },
                    {
                        "code": "value"
                    },
                    {
                        "code": "processing"
                    },
                    {
                        "code": "duplicate"
                    },
                    {
                        "code": "not-found"
                    },
                    {
                        "code": "conflict"
                    },
                    {
                        "code": "lock"
                    },
                    {
                        "code": "exception"
                    },
                    {
                        "code": "tbrottled"
                    },
                    {
                        "code": "login"
                    },
                    {
                        "code": "unknown"
                    }
                ]
            }
        ]
    },
    "expansion": {
        "identifier": "urn:uuid:42316ff8-2714-4680-9980-f37a6d1a71bc",
        "timestamp": "2018-07-20T23:14:07+10:00",
        "parameter": [
            {
                "name": "excludeNotForUI",
                "valueUri": "false"
            }
        ],
        "contains": [
            {
                "abstract": true,
                "display": "(Most common)",
                "contains": [
                    {
                        "system": "http://hl7.org/fhir/hacked",
                        "code": "login",
                        "display": "Login Required"
                    },
                    {
                        "system": "http://hl7.org/fhir/hacked",
                        "code": "conflict",
                        "display": "Edit Version Conflict"
                    }
                ]
            },
            {
                "system": "http://hl7.org/fhir/hacked",
                "code": "processing",
                "display": "Processing Failure",
                "contains": [
                    {
                        "system": "http://hl7.org/fhir/hacked",
                        "code": "duplicate",
                        "display": "Duplicate"
                    },
                    {
                        "system": "http://hl7.org/fhir/hacked",
                        "code": "not-found",
                        "display": "Not Found"
                    }
                ]
            },
            {
                "system": "http://hl7.org/fhir/hacked",
                "abstract": true,
                "code": "invalid",
                "display": "Invalid Content",
                "contains": [
                    {
                        "system": "http://hl7.org/fhir/hacked",
                        "code": "structure",
                        "display": "Structural Issue"
                    },
                    {
                        "system": "http://hl7.org/fhir/hacked",
                        "code": "required",
                        "display": "Required element missing"
                    },
                    {
                        "system": "http://hl7.org/fhir/hacked",
                        "code": "value",
                        "display": "Element value invalid"
                    }
                ]
            },
            {
                "system": "http://hl7.org/fhir/hacked",
                "abstract": true,
                "code": "transient",
                "display": "Transient Issue",
                "contains": [
                    {
                        "system": "http://hl7.org/fhir/hacked",
                        "code": "lock-error",
                        "display": "Lock Error"
                    },
                    {
                        "system": "http://hl7.org/fhir/hacked",
                        "code": "exception",
                        "display": "Exception"
                    },
                    {
                        "system": "http://hl7.org/fhir/hacked",
                        "code": "throttled",
                        "display": "Throttled"
                    }
                ]
            },
            {
                "system": "http://hl7.org/fhir/hacked",
                "abstract": true,
                "code": "security",
                "display": "Security Problem",
                "contains": [
                    {
                        "system": "http://hl7.org/fhir/hacked",
                        "code": "login",
                        "display": "Login Required"
                    },
                    {
                        "system": "http://hl7.org/fhir/hacked",
                        "code": "unknown",
                        "display": "Unknown User"
                    }
                ]
            }
        ]
    }
};

var example21: fhir.ValueSet = {
    "resourceType": "ValueSet",
    "id": "example-intensional",
    "meta": {
        "lastUpdated": "2019-11-01T09:29:23.356+11:00",
        "profile": [
            "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
        ]
    },
    "extension": [
        {
            "url": "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
            "valueCode": "fhir"
        }
    ],
    "url": "http://hl7.org/fhir/ValueSet/example-intensional",
    "identifier": [
        {
            "system": "http://acme.com/identifiers/valuesets",
            "value": "loinc-cholesterol-ext"
        }
    ],
    "version": "4.0.1",
    "name": "LOINC Codes for Cholesterol in Serum/Plasma",
    "status": "draft",
    "experimental": true,
    "date": "2015-06-22",
    "publisher": "HL7 International",
    "contact": [
        {
            "name": "FHIR project team",
            "telecom": [
                {
                    "system": "url",
                    "value": "http://hl7.org/fhir"
                }
            ]
        }
    ],
    "description": "This is an example value set that includes all the LOINC codes for serum/plasma cholesterol from v2.36.",
    "copyright": "This content from LOINCÂ® is copyright Â© 1995 Regenstrief Institute, Inc. and the LOINC Committee, and available at no cost under the license at http://loinc.org/terms-of-use",
    "compose": {
        "include": [
            {
                "system": "http://loinc.org",
                "filter": [
                    {
                        "property": "parent",
                        "op": "=",
                        "value": "LP43571-6"
                    }
                ]
            }
        ],
        "exclude": [
            {
                "system": "http://loinc.org",
                "concept": [
                    {
                        "code": "5932-9",
                        "display": "Cholesterol [Presence] in Blood by Test strip"
                    }
                ]
            }
        ]
    }
};

var example22: fhir.ValueSet = {
    "resourceType": "ValueSet",
    "id": "examplescenario-actor-type",
    "meta": {
        "lastUpdated": "2019-11-01T09:29:23.356+11:00",
        "profile": [
            "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
        ]
    },
    "extension": [
        {
            "url": "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
            "valueCode": "fhir"
        },
        {
            "url": "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
            "valueCode": "trial-use"
        },
        {
            "url": "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
            "valueInteger": 0
        }
    ],
    "url": "http://hl7.org/fhir/ValueSet/examplescenario-actor-type",
    "identifier": [
        {
            "system": "urn:ietf:rfc:3986",
            "value": "urn:oid:2.16.840.1.113883.4.642.3.858"
        }
    ],
    "version": "4.0.1",
    "name": "ExampleScenarioActorType",
    "title": "ExampleScenarioActorType",
    "status": "draft",
    "experimental": false,
    "date": "2019-11-01T09:29:23+11:00",
    "publisher": "HL7 (FHIR Project)",
    "contact": [
        {
            "telecom": [
                {
                    "system": "url",
                    "value": "http://hl7.org/fhir"
                },
                {
                    "system": "email",
                    "value": "fhir@lists.hl7.org"
                }
            ]
        }
    ],
    "description": "The type of actor - system or human.",
    "immutable": true,
    "compose": {
        "include": [
            {
                "system": "http://hl7.org/fhir/examplescenario-actor-type"
            }
        ]
    }
};

var example23: fhir.ValueSet = {
    "resourceType": "ValueSet",
    "id": "list-example-codes",
    "meta": {
        "lastUpdated": "2019-11-01T09:29:23.356+11:00",
        "profile": [
            "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
        ]
    },
    "extension": [
        {
            "url": "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
            "valueCode": "fhir"
        },
        {
            "url": "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
            "valueCode": "draft"
        },
        {
            "url": "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
            "valueInteger": 1
        }
    ],
    "url": "http://hl7.org/fhir/ValueSet/list-example-codes",
    "identifier": [
        {
            "system": "urn:ietf:rfc:3986",
            "value": "urn:oid:2.16.840.1.113883.4.642.3.316"
        }
    ],
    "version": "4.0.1",
    "name": "ExampleUseCodesForList",
    "title": "Example Use Codes for List",
    "status": "draft",
    "experimental": false,
    "date": "2019-11-01T09:29:23+11:00",
    "publisher": "FHIR Project",
    "contact": [
        {
            "telecom": [
                {
                    "system": "url",
                    "value": "http://hl7.org/fhir"
                }
            ]
        }
    ],
    "description": "Example use codes for the List resource - typical kinds of use.",
    "immutable": true,
    "compose": {
        "include": [
            {
                "system": "http://terminology.hl7.org/CodeSystem/list-example-use-codes"
            }
        ]
    }
};

var example24: fhir.StructureDefinition = {
    "resourceType": "StructureDefinition",
    "id": "de-ElementDefinition.example.label",
    "meta": {
        "lastUpdated": "2019-11-01T09:29:23.356+11:00"
    },
    "url": "http://hl7.org/fhir/StructureDefinition/de-ElementDefinition.example.label",
    "version": "4.0.1",
    "name": "ElementDefinition.example.label",
    "title": "ElementDefinition.example.label",
    "status": "draft",
    "experimental": true,
    "date": "2019-11-01T09:29:23+11:00",
    "publisher": "HL7 FHIR Standard",
    "contact": [
        {
            "telecom": [
                {
                    "system": "url",
                    "value": "http://hl7.org/fhir"
                }
            ]
        }
    ],
    "description": "Data Element for ElementDefinition.example.label",
    "purpose": "Data Elements are defined for each element to assist in questionnaire construction etc",
    "fhirVersion": "4.0.1",
    "mapping": [
        {
            "identity": "v2",
            "uri": "http://hl7.org/v2",
            "name": "HL7 v2 Mapping"
        },
        {
            "identity": "rim",
            "uri": "http://hl7.org/v3",
            "name": "RIM Mapping"
        },
        {
            "identity": "iso11179",
            "uri": "http://metadata-standards.org/11179/",
            "name": "ISO 11179"
        },
        {
            "identity": "dex",
            "uri": "http://ihe.net/data-element-exchange",
            "name": "IHE Data Element Exchange (DEX)"
        },
        {
            "identity": "loinc",
            "uri": "http://loinc.org",
            "name": "LOINC code for the element"
        }
    ],
    "kind": "logical",
    "abstract": false,
    "type": "ElementDefinition.example.label",
    "baseDefinition": "http://hl7.org/fhir/StructureDefinition/Element",
    "derivation": "specialization",
    "snapshot": {
        "element": [
            {
                "id": "ElementDefinition.example.label",
                "extension": [
                    {
                        "url": "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
                        "valueBoolean": true
                    }
                ],
                "path": "ElementDefinition.example.label",
                "short": "Describes the purpose of this example",
                "definition": "Describes the purpose of this example amoung the set of examples.",
                "min": 1,
                "max": "1",
                "base": {
                    "path": "ElementDefinition.example.label",
                    "min": 1,
                    "max": "1"
                },
                "type": [
                    {
                        "code": "string"
                    }
                ],
                "isModifier": false,
                "isSummary": true,
                "mapping": [
                    {
                        "identity": "rim",
                        "map": "N/A (MIF territory)"
                    }
                ]
            }
        ]
    }
};

var example25: fhir.StructureDefinition = {
    "resourceType": "StructureDefinition",
    "id": "de-ElementDefinition.example.valueX",
    "meta": {
        "lastUpdated": "2019-11-01T09:29:23.356+11:00"
    },
    "url": "http://hl7.org/fhir/StructureDefinition/de-ElementDefinition.example.valueX",
    "version": "4.0.1",
    "name": "ElementDefinition.example.value[x]",
    "title": "ElementDefinition.example.value[x]",
    "status": "draft",
    "experimental": true,
    "date": "2019-11-01T09:29:23+11:00",
    "publisher": "HL7 FHIR Standard",
    "contact": [
        {
            "telecom": [
                {
                    "system": "url",
                    "value": "http://hl7.org/fhir"
                }
            ]
        }
    ],
    "description": "Data Element for ElementDefinition.example.value[x]",
    "purpose": "Data Elements are defined for each element to assist in questionnaire construction etc",
    "fhirVersion": "4.0.1",
    "mapping": [
        {
            "identity": "v2",
            "uri": "http://hl7.org/v2",
            "name": "HL7 v2 Mapping"
        },
        {
            "identity": "rim",
            "uri": "http://hl7.org/v3",
            "name": "RIM Mapping"
        },
        {
            "identity": "iso11179",
            "uri": "http://metadata-standards.org/11179/",
            "name": "ISO 11179"
        },
        {
            "identity": "dex",
            "uri": "http://ihe.net/data-element-exchange",
            "name": "IHE Data Element Exchange (DEX)"
        },
        {
            "identity": "loinc",
            "uri": "http://loinc.org",
            "name": "LOINC code for the element"
        }
    ],
    "kind": "logical",
    "abstract": false,
    "type": "ElementDefinition.example.value[x]",
    "baseDefinition": "http://hl7.org/fhir/StructureDefinition/Element",
    "derivation": "specialization",
    "snapshot": {
        "element": [
            {
                "id": "ElementDefinition.example.value[x]",
                "path": "ElementDefinition.example.value[x]",
                "short": "Value of Example (one of allowed types)",
                "definition": "The actual value for the element, which must be one of the types allowed for this element.",
                "min": 1,
                "max": "1",
                "base": {
                    "path": "ElementDefinition.example.value[x]",
                    "min": 1,
                    "max": "1"
                },
                "type": [
                    {
                        "code": "base64Binary"
                    },
                    {
                        "code": "boolean"
                    },
                    {
                        "code": "canonical"
                    },
                    {
                        "code": "code"
                    },
                    {
                        "code": "date"
                    },
                    {
                        "code": "dateTime"
                    },
                    {
                        "code": "decimal"
                    },
                    {
                        "code": "id"
                    },
                    {
                        "code": "instant"
                    },
                    {
                        "code": "integer"
                    },
                    {
                        "code": "markdown"
                    },
                    {
                        "code": "oid"
                    },
                    {
                        "code": "positiveInt"
                    },
                    {
                        "code": "string"
                    },
                    {
                        "code": "time"
                    },
                    {
                        "code": "unsignedInt"
                    },
                    {
                        "code": "uri"
                    },
                    {
                        "code": "url"
                    },
                    {
                        "code": "uuid"
                    },
                    {
                        "code": "Address"
                    },
                    {
                        "code": "Age"
                    },
                    {
                        "code": "Annotation"
                    },
                    {
                        "code": "Attachment"
                    },
                    {
                        "code": "CodeableConcept"
                    },
                    {
                        "code": "Coding"
                    },
                    {
                        "code": "ContactPoint"
                    },
                    {
                        "code": "Count"
                    },
                    {
                        "code": "Distance"
                    },
                    {
                        "code": "Duration"
                    },
                    {
                        "code": "HumanName"
                    },
                    {
                        "code": "Identifier"
                    },
                    {
                        "code": "Money"
                    },
                    {
                        "code": "Period"
                    },
                    {
                        "code": "Quantity"
                    },
                    {
                        "code": "Range"
                    },
                    {
                        "code": "Ratio"
                    },
                    {
                        "code": "Reference"
                    },
                    {
                        "code": "SampledData"
                    },
                    {
                        "code": "Signature"
                    },
                    {
                        "code": "Timing"
                    },
                    {
                        "code": "ContactDetail"
                    },
                    {
                        "code": "Contributor"
                    },
                    {
                        "code": "DataRequirement"
                    },
                    {
                        "code": "Expression"
                    },
                    {
                        "code": "ParameterDefinition"
                    },
                    {
                        "code": "RelatedArtifact"
                    },
                    {
                        "code": "TriggerDefinition"
                    },
                    {
                        "code": "UsageContext"
                    },
                    {
                        "code": "Dosage"
                    },
                    {
                        "code": "Meta"
                    }
                ],
                "isModifier": false,
                "isSummary": true,
                "mapping": [
                    {
                        "identity": "rim",
                        "map": "N/A (MIF territory)"
                    },
                    {
                        "identity": "iso11179",
                        "map": ".example"
                    },
                    {
                        "identity": "loinc",
                        "map": "EXMPL_ANSWERS"
                    }
                ]
            }
        ]
    }
};

var example26: fhir.StructureDefinition = {
    "resourceType": "StructureDefinition",
    "id": "de-ImplementationGuide.definition.resource.exampleX",
    "meta": {
        "lastUpdated": "2019-11-01T09:29:23.356+11:00"
    },
    "url": "http://hl7.org/fhir/StructureDefinition/de-ImplementationGuide.definition.resource.exampleX",
    "version": "4.0.1",
    "name": "ImplementationGuide.definition.resource.example[x]",
    "title": "ImplementationGuide.definition.resource.example[x]",
    "status": "draft",
    "experimental": true,
    "date": "2019-11-01T09:29:23+11:00",
    "publisher": "HL7 FHIR Standard",
    "contact": [
        {
            "telecom": [
                {
                    "system": "url",
                    "value": "http://hl7.org/fhir"
                }
            ]
        }
    ],
    "description": "Data Element for ImplementationGuide.definition.resource.example[x]",
    "purpose": "Data Elements are defined for each element to assist in questionnaire construction etc",
    "fhirVersion": "4.0.1",
    "mapping": [
        {
            "identity": "rim",
            "uri": "http://hl7.org/v3",
            "name": "RIM Mapping"
        },
        {
            "identity": "workflow",
            "uri": "http://hl7.org/fhir/workflow",
            "name": "Workflow Pattern"
        },
        {
            "identity": "w5",
            "uri": "http://hl7.org/fhir/fivews",
            "name": "FiveWs Pattern Mapping"
        },
        {
            "identity": "objimpl",
            "uri": "http://hl7.org/fhir/object-implementation",
            "name": "Object Implementation Information"
        }
    ],
    "kind": "logical",
    "abstract": false,
    "type": "ImplementationGuide.definition.resource.example[x]",
    "baseDefinition": "http://hl7.org/fhir/StructureDefinition/Element",
    "derivation": "specialization",
    "snapshot": {
        "element": [
            {
                "id": "ImplementationGuide.definition.resource.example[x]",
                "path": "ImplementationGuide.definition.resource.example[x]",
                "short": "Is an example/What is this an example of?",
                "definition": "If true or a reference, indicates the resource is an example instance.  If a reference is present, indicates that the example is an example of the specified profile.",
                "comment": "Examples: \n\n* StructureDefinition -> Any \n* ValueSet -> expansion \n* OperationDefinition -> Parameters \n* Questionnaire -> QuestionnaireResponse.",
                "min": 0,
                "max": "1",
                "base": {
                    "path": "ImplementationGuide.definition.resource.example[x]",
                    "min": 0,
                    "max": "1"
                },
                "type": [
                    {
                        "code": "boolean"
                    },
                    {
                        "code": "canonical",
                        "targetProfile": [
                            "http://hl7.org/fhir/StructureDefinition/StructureDefinition"
                        ]
                    }
                ],
                "isModifier": false,
                "isSummary": false
            }
        ]
    }
};

var example27: fhir.StructureDefinition = {
    "resourceType": "StructureDefinition",
    "id": "de-ImplementationGuide.manifest.resource.exampleX",
    "meta": {
        "lastUpdated": "2019-11-01T09:29:23.356+11:00"
    },
    "url": "http://hl7.org/fhir/StructureDefinition/de-ImplementationGuide.manifest.resource.exampleX",
    "version": "4.0.1",
    "name": "ImplementationGuide.manifest.resource.example[x]",
    "title": "ImplementationGuide.manifest.resource.example[x]",
    "status": "draft",
    "experimental": true,
    "date": "2019-11-01T09:29:23+11:00",
    "publisher": "HL7 FHIR Standard",
    "contact": [
        {
            "telecom": [
                {
                    "system": "url",
                    "value": "http://hl7.org/fhir"
                }
            ]
        }
    ],
    "description": "Data Element for ImplementationGuide.manifest.resource.example[x]",
    "purpose": "Data Elements are defined for each element to assist in questionnaire construction etc",
    "fhirVersion": "4.0.1",
    "mapping": [
        {
            "identity": "rim",
            "uri": "http://hl7.org/v3",
            "name": "RIM Mapping"
        },
        {
            "identity": "workflow",
            "uri": "http://hl7.org/fhir/workflow",
            "name": "Workflow Pattern"
        },
        {
            "identity": "w5",
            "uri": "http://hl7.org/fhir/fivews",
            "name": "FiveWs Pattern Mapping"
        },
        {
            "identity": "objimpl",
            "uri": "http://hl7.org/fhir/object-implementation",
            "name": "Object Implementation Information"
        }
    ],
    "kind": "logical",
    "abstract": false,
    "type": "ImplementationGuide.manifest.resource.example[x]",
    "baseDefinition": "http://hl7.org/fhir/StructureDefinition/Element",
    "derivation": "specialization",
    "snapshot": {
        "element": [
            {
                "id": "ImplementationGuide.manifest.resource.example[x]",
                "path": "ImplementationGuide.manifest.resource.example[x]",
                "short": "Is an example/What is this an example of?",
                "definition": "If true or a reference, indicates the resource is an example instance.  If a reference is present, indicates that the example is an example of the specified profile.",
                "comment": "Typically, conformance resources and knowledge resources are directly part of the implementation guide, with their normal meaning, and patient linked resources are usually examples. However this is not always true.",
                "min": 0,
                "max": "1",
                "base": {
                    "path": "ImplementationGuide.manifest.resource.example[x]",
                    "min": 0,
                    "max": "1"
                },
                "type": [
                    {
                        "code": "boolean"
                    },
                    {
                        "code": "canonical",
                        "targetProfile": [
                            "http://hl7.org/fhir/StructureDefinition/StructureDefinition"
                        ]
                    }
                ],
                "isModifier": false,
                "isSummary": false
            }
        ]
    }
};

