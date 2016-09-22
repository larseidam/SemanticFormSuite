export let DISPEDIACORE: String = '\n\
<http://www.dispedia.de/> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#Ontology> .\n\
<http://www.dispedia.de/> <http://www.w3.org/2000/01/rdf-schema#label> \"Dispedia Vokabular (Kern Ontologie)\"@de .\n\
<http://www.dispedia.de/> <http://www.w3.org/2000/01/rdf-schema#label> \"Dispedia Vocabulary (Core Ontology)\"@en .\n\
<http://www.dispedia.de/> <http://www.w3.org/2002/07/owl#versionInfo> \"0.7.0.0002\"^^<http://www.w3.org/1999/02/22-rdf-syntax-ns#PlainLiteral> .\n\
<http://www.dispedia.de/> <http://www.w3.org/2000/01/rdf-schema#comment> \"Diese Ontologie (Vokabular) enth\u00E4lt alle Kern-Konzepte des Dispedia Informationslogistik Systems.\"@de .\n\
<http://www.dispedia.de/> <http://www.w3.org/2000/01/rdf-schema#comment> \"This is the Core Ontology of the Dispedia Information Logistics System. All concepts are included needed to represent information for and about the patient.\"@en .\n\
<http://www.dispedia.de/> <http://purl.org/dc/terms/contributor> \"Romy Elze\" .\n\
<http://www.dispedia.de/> <http://purl.org/dc/terms/contributor> \"Michael Martin\" .\n\
<http://www.dispedia.de/> <http://purl.org/dc/terms/contributor> \"Tom-Michael Hesse\" .\n\
<http://www.dispedia.de/> <http://purl.org/dc/terms/contributor> \"Lars Eidam\" .\n\
<http://www.dispedia.de/> <http://purl.org/dc/terms/contributor> \"Marcus Nitzschke\" .\n\
<http://www.dispedia.de/> <http://creativecommons.org/ns#license> <http://creativecommons.org/licenses/by/3.0/> .\n\
<http://www.w3.org/2002/07/owl#versionInfo> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#AnnotationProperty> .\n\
<http://www.w3.org/2000/01/rdf-schema#label> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#AnnotationProperty> .\n\
<http://www.w3.org/2000/01/rdf-schema#comment> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#AnnotationProperty> .\n\
<http://www.dispedia.de/o/isDoctorOf> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#ObjectProperty> .\n\
<http://www.dispedia.de/o/isDoctorOf> <http://www.w3.org/2000/01/rdf-schema#label> \"ist Arzt von\"@de .\n\
<http://www.dispedia.de/o/isDoctorOf> <http://www.w3.org/2000/01/rdf-schema#label> \"is doctor of\"@en .\n\
<http://www.dispedia.de/o/isDoctorOf> <http://www.w3.org/2000/01/rdf-schema#comment> \"Die Objekteigenschaft ordnet einen Arzt zu einem Patienten zu.\"@de .\n\
<http://www.dispedia.de/o/isDoctorOf> <http://www.w3.org/2000/01/rdf-schema#comment> \"This ObjectProperty assigns a doctor to a patient.\"@en .\n\
<http://www.dispedia.de/o/isDoctorOf> <http://www.w3.org/2000/01/rdf-schema#domain> <http://www.dispedia.de/o/Person> .\n\
<http://www.dispedia.de/o/isDoctorOf> <http://www.w3.org/2000/01/rdf-schema#range> <http://www.dispedia.de/o/Patient> .\n\
<http://www.dispedia.de/o/isFamilyDoctorOf> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#ObjectProperty> .\n\
<http://www.dispedia.de/o/isFamilyDoctorOf> <http://www.w3.org/2000/01/rdf-schema#label> \"ist Hausarzt von\"@de .\n\
<http://www.dispedia.de/o/isFamilyDoctorOf> <http://www.w3.org/2000/01/rdf-schema#label> \"is family doctor of\"@en .\n\
<http://www.dispedia.de/o/isFamilyDoctorOf> <http://www.w3.org/2000/01/rdf-schema#comment> \"Die Objekteigenschaft ordnet einen Hausarzt zu einem Patienten zu.\"@de .\n\
<http://www.dispedia.de/o/isFamilyDoctorOf> <http://www.w3.org/2000/01/rdf-schema#comment> \"This ObjectProperty assigns a family doctor to a patient.\"@en .\n\
<http://www.dispedia.de/o/isFamilyDoctorOf> <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://www.dispedia.de/o/isDoctorOf> .\n\
<http://www.dispedia.de/o/hasDisease> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#ObjectProperty> .\n\
<http://www.dispedia.de/o/hasDisease> <http://www.w3.org/2000/01/rdf-schema#label> \"hat Krankheit\"@de .\n\
<http://www.dispedia.de/o/hasDisease> <http://www.w3.org/2000/01/rdf-schema#label> \"has disease\"@en .\n\
<http://www.dispedia.de/o/hasDisease> <http://www.w3.org/2000/01/rdf-schema#comment> \"Diese Objekteigenschaft ordnet eine Krankheit einem Patienten zu.\"@de .\n\
<http://www.dispedia.de/o/hasDisease> <http://www.w3.org/2000/01/rdf-schema#comment> \"This ObjectProperty assigns a disease to a patient.\"@en .\n\
<http://www.dispedia.de/o/hasDisease> <http://www.w3.org/2000/01/rdf-schema#domain> <http://www.dispedia.de/o/Patient> .\n\
<http://www.dispedia.de/o/hasDisease> <http://www.w3.org/2000/01/rdf-schema#range> <http://www.dispedia.de/o/Disease> .\n\
<http://www.dispedia.de/o/hasHealthState> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#ObjectProperty> .\n\
<http://www.dispedia.de/o/hasHealthState> <http://www.w3.org/2000/01/rdf-schema#label> \"enth\u00E4lt Gesundheitsstatus\"@de .\n\
<http://www.dispedia.de/o/hasHealthState> <http://www.w3.org/2000/01/rdf-schema#label> \"includes health state\"@en .\n\
<http://www.dispedia.de/o/hasHealthState> <http://www.w3.org/2000/01/rdf-schema#comment> \"Diese Objekteigenschaft ordnet Informationen zum Gesundheitsstatus einem Patienten zu.\"@de .\n\
<http://www.dispedia.de/o/hasHealthState> <http://www.w3.org/2000/01/rdf-schema#comment> \"This ObjectProperty assigns informations about the health state to a patient.\"@en .\n\
<http://www.dispedia.de/o/hasHealthState> <http://www.w3.org/2000/01/rdf-schema#domain> <http://www.dispedia.de/o/Patient> .\n\
<http://www.dispedia.de/o/hasHealthState> <http://www.w3.org/2000/01/rdf-schema#range> <http://www.dispedia.de/o/HealthState> .\n\
<http://www.dispedia.de/o/hasDrugAllergy> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#ObjectProperty> .\n\
<http://www.dispedia.de/o/hasDrugAllergy> <http://www.w3.org/2000/01/rdf-schema#label> \"hat Arzneimittel-Allergie\"@de .\n\
<http://www.dispedia.de/o/hasDrugAllergy> <http://www.w3.org/2000/01/rdf-schema#label> \"has drug allergy\"@en .\n\
<http://www.dispedia.de/o/hasDrugAllergy> <http://www.w3.org/2000/01/rdf-schema#comment> \"Diese Objekteigenschaft ordnet ein bestimmtes Arzneimittelprodukt einem Patienten zu, auf welches er allergisch reagiert.\"@de .\n\
<http://www.dispedia.de/o/hasDrugAllergy> <http://www.w3.org/2000/01/rdf-schema#comment> \"This ObjectProperty assigns a drug product to a patient on which he shows allergic reactions.\"@en .\n\
<http://www.dispedia.de/o/hasDrugAllergy> <http://www.w3.org/2000/01/rdf-schema#domain> <http://www.dispedia.de/o/Patient> .\n\
<http://www.dispedia.de/o/hasDrugAllergy> <http://www.w3.org/2000/01/rdf-schema#range> <http://hc.serviceOntology.org/DrugProduct> .\n\
<http://www.dispedia.de/o/receivesProductOrService> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#ObjectProperty> .\n\
<http://www.dispedia.de/o/receivesProductOrService> <http://www.w3.org/2000/01/rdf-schema#label> \"erh\u00E4lt Produkt oder Service\"@de .\n\
<http://www.dispedia.de/o/receivesProductOrService> <http://www.w3.org/2000/01/rdf-schema#label> \"receives Product or Service\"@en .\n\
<http://www.dispedia.de/o/receivesProductOrService> <http://www.w3.org/2000/01/rdf-schema#comment> \"Die Eigenschaft \'erh\u00E4ltProduktOderService\' bestimmt welche Produkte oder Services eine Person erh\u00E4lt.\"@de .\n\
<http://www.dispedia.de/o/receivesProductOrService> <http://www.w3.org/2000/01/rdf-schema#comment> \"This ObjectProperty describes which products or services a certain person receives.\"@en .\n\
<http://www.dispedia.de/o/receivesProductOrService> <http://www.w3.org/2000/01/rdf-schema#domain> <http://www.dispedia.de/o/HealthState> .\n\
<http://www.dispedia.de/o/receivesProductOrService> <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.org/goodrelations/v1#ProductOrService> .\n\
<http://www.dispedia.de/o/receivedProductOrService> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#ObjectProperty> .\n\
<http://www.dispedia.de/o/receivedProductOrService> <http://www.w3.org/2000/01/rdf-schema#label> \"erhielt Produkt oder Service\"@de .\n\
<http://www.dispedia.de/o/receivedProductOrService> <http://www.w3.org/2000/01/rdf-schema#label> \"received Product or Service\"@en .\n\
<http://www.dispedia.de/o/receivedProductOrService> <http://www.w3.org/2000/01/rdf-schema#comment> \"Die Eigenschaft \'erhieltProduktOderService\' bestimmt welche Produkte oder Services eine Person bereits erhielt, aber aktuell nicht erh\u00E4lt.\"@de .\n\
<http://www.dispedia.de/o/receivedProductOrService> <http://www.w3.org/2000/01/rdf-schema#comment> \"This ObjectProperty describes which products or services a certain person already received but currently not receives.\"@en .\n\
<http://www.dispedia.de/o/receivedProductOrService> <http://www.w3.org/2000/01/rdf-schema#domain> <http://www.dispedia.de/o/HealthState> .\n\
<http://www.dispedia.de/o/receivedProductOrService> <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.org/goodrelations/v1#ProductOrService> .\n\
<http://www.dispedia.de/o/hasDate> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#DatatypeProperty> .\n\
<http://www.dispedia.de/o/hasDate> <http://www.w3.org/2000/01/rdf-schema#label> \"hat Datum\"@de .\n\
<http://www.dispedia.de/o/hasDate> <http://www.w3.org/2000/01/rdf-schema#label> \"has date\"@en .\n\
<http://www.dispedia.de/o/hasDate> <http://www.w3.org/2000/01/rdf-schema#comment> \"Die Datentyp-Eigenschaft \'hat Datum\' beschreibt den jeweiligen Zeitpunkt des Subjekts.\"@de .\n\
<http://www.dispedia.de/o/hasDate> <http://www.w3.org/2000/01/rdf-schema#comment> \"The DatatypeProperty \'hasDate\' describes the respective date of the given subject.\"@en .\n\
<http://www.dispedia.de/o/hasDate> <http://www.w3.org/2000/01/rdf-schema#domain> <http://www.dispedia.de/o/HealthState> .\n\
<http://www.dispedia.de/o/hasDate> <http://www.w3.org/2000/01/rdf-schema#domain> <http://www.dispedia.de/o/Place> .\n\
<http://www.dispedia.de/o/hasDate> <http://www.w3.org/2000/01/rdf-schema#range> <http://www.w3.org/2001/XMLSchema#dateTime> .\n\
<http://www.dispedia.de/o/accepts> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#ObjectProperty> .\n\
<http://www.dispedia.de/o/accepts> <http://www.w3.org/2000/01/rdf-schema#label> \"akzeptiert\"@de .\n\
<http://www.dispedia.de/o/accepts> <http://www.w3.org/2000/01/rdf-schema#label> \"accepts\"@en .\n\
<http://www.dispedia.de/o/accepts> <http://www.w3.org/2000/01/rdf-schema#domain> <http://www.dispedia.de/o/HealthState> .\n\
<http://www.dispedia.de/o/accepts> <http://www.w3.org/2000/01/rdf-schema#range> <http://www.dispedia.de/o/Proposal> .\n\
<http://www.dispedia.de/o/accepts> <http://www.w3.org/2002/07/owl#propertyDisjointWith> <http://www.dispedia.de/o/denies> .\n\
<http://www.dispedia.de/o/accepts> <http://www.w3.org/2000/01/rdf-schema#comment> \"Die Objekteigenschaft \'akzeptiert\' kennzeichnet einen zugewiesenen Vorschlag als akzeptierte Entscheidung.\"@de .\n\
<http://www.dispedia.de/o/accepts> <http://www.w3.org/2000/01/rdf-schema#comment> \"The ObjectProperty \'accepts\' indicates an allocated proposal as accepted decision.\"@en .\n\
<http://www.dispedia.de/o/denies> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#ObjectProperty> .\n\
<http://www.dispedia.de/o/denies> <http://www.w3.org/2000/01/rdf-schema#label> \"lehnt ab\"@de .\n\
<http://www.dispedia.de/o/denies> <http://www.w3.org/2000/01/rdf-schema#label> \"denies\"@en .\n\
<http://www.dispedia.de/o/denies> <http://www.w3.org/2000/01/rdf-schema#comment> \"Die Objekteigenschaft \'lehnt ab\' kennzeichnet einen zugewiesenen Vorschlag als abgelehnte Entscheidung.\"@de .\n\
<http://www.dispedia.de/o/denies> <http://www.w3.org/2000/01/rdf-schema#comment> \"The ObjectProperty \'denies\' indicates an allocated proposal as denied decision.\"@en .\n\
<http://www.dispedia.de/o/denies> <http://www.w3.org/2000/01/rdf-schema#domain> <http://www.dispedia.de/o/HealthState> .\n\
<http://www.dispedia.de/o/denies> <http://www.w3.org/2000/01/rdf-schema#range> <http://www.dispedia.de/o/Proposal> .\n\
<http://www.dispedia.de/o/isPending> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#ObjectProperty> .\n\
<http://www.dispedia.de/o/isPending> <http://www.w3.org/2000/01/rdf-schema#label> \"wartend\"@de .\n\
<http://www.dispedia.de/o/isPending> <http://www.w3.org/2000/01/rdf-schema#label> \"is pending\"@en .\n\
<http://www.dispedia.de/o/isPending> <http://www.w3.org/2000/01/rdf-schema#comment> \"Die Objekteigenschaft \'wartend\' kennzeichnet einen zugewiesenen Vorschlag als noch ausstehend. Eine Entscheidung wurde noch nicht getroffen.\"@de .\n\
<http://www.dispedia.de/o/isPending> <http://www.w3.org/2000/01/rdf-schema#comment> \"The ObjectProperty \'is pending\' indicates an allocated proposal as pending. A decision has not been made yet.\"@en .\n\
<http://www.dispedia.de/o/isPending> <http://www.w3.org/2000/01/rdf-schema#domain> <http://www.dispedia.de/o/HealthState> .\n\
<http://www.dispedia.de/o/isPending> <http://www.w3.org/2000/01/rdf-schema#range> <http://www.dispedia.de/o/Proposal> .\n\
<http://www.dispedia.de/o/includes> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#ObjectProperty> .\n\
<http://www.dispedia.de/o/includes> <http://www.w3.org/2000/01/rdf-schema#label> \"beeinhaltet\"@de .\n\
<http://www.dispedia.de/o/includes> <http://www.w3.org/2000/01/rdf-schema#label> \"includes\"@en .\n\
<http://www.dispedia.de/o/includes> <http://www.w3.org/2000/01/rdf-schema#comment> \"Diese generische Objekteigenschaft verbindet Entit\u00E4ten bez\u00FCglich Informationen \u00FCber Patienten.\"@de .\n\
<http://www.dispedia.de/o/includes> <http://www.w3.org/2000/01/rdf-schema#comment> \"This generic ObjectProperty connects entities concerning information about the patient.\"@en .\n\
<http://www.dispedia.de/o/includesHealthProperties> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#ObjectProperty> .\n\
<http://www.dispedia.de/o/includesHealthProperties> <http://www.w3.org/2000/01/rdf-schema#label> \"beinhaltet Gesundheits-Eigenschaften\"@de .\n\
<http://www.dispedia.de/o/includesHealthProperties> <http://www.w3.org/2000/01/rdf-schema#label> \"includes health properties\"@en .\n\
<http://www.dispedia.de/o/includesHealthProperties> <http://www.w3.org/2000/01/rdf-schema#comment> \"Die Objekteigenschaft weist einem Gesundheitszustand eine Menge von Gesundheits-Eigenschaften zu.\"@de .\n\
<http://www.dispedia.de/o/includesHealthProperties> <http://www.w3.org/2000/01/rdf-schema#comment> \"This ObjectProperty assigns a set of health properties to a health state.\"@en .\n\
<http://www.dispedia.de/o/includesHealthProperties> <http://www.w3.org/2000/01/rdf-schema#domain> <http://www.dispedia.de/o/HealthState> .\n\
<http://www.dispedia.de/o/includesHealthProperties> <http://www.w3.org/2000/01/rdf-schema#range> <http://www.dispedia.de/o/PropertySet> .\n\
<http://www.dispedia.de/o/includesHealthProperties> <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://www.dispedia.de/o/includes> .\n\
<http://www.dispedia.de/o/includesSymptoms> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#ObjectProperty> .\n\
<http://www.dispedia.de/o/includesSymptoms> <http://www.w3.org/2000/01/rdf-schema#label> \"beeinhaltet Symptome\"@de .\n\
<http://www.dispedia.de/o/includesSymptoms> <http://www.w3.org/2000/01/rdf-schema#label> \"includes symptoms\"@en .\n\
<http://www.dispedia.de/o/includesSymptoms> <http://www.w3.org/2000/01/rdf-schema#comment> \"Die Objekteigenschaft weist einem Gesundheitszustand eine Menge von Symptomen zu.\"@de .\n\
<http://www.dispedia.de/o/includesSymptoms> <http://www.w3.org/2000/01/rdf-schema#comment> \"This ObjectProperty assigns a set of symptoms to a health state.\"@en .\n\
<http://www.dispedia.de/o/includesSymptoms> <http://www.w3.org/2000/01/rdf-schema#domain> <http://www.dispedia.de/o/HealthState> .\n\
<http://www.dispedia.de/o/includesSymptoms> <http://www.w3.org/2000/01/rdf-schema#range> <http://www.dispedia.de/o/SymptomSet> .\n\
<http://www.dispedia.de/o/includesSymptoms> <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://www.dispedia.de/o/includes> .\n\
<http://www.dispedia.de/o/receivedProposalDescription> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#ObjectProperty> .\n\
<http://www.dispedia.de/o/receivedProposalDescription> <http://www.w3.org/2000/01/rdf-schema#label> \"Vorschlagsbeschreibungstext erhalten\"@de .\n\
<http://www.dispedia.de/o/receivedProposalDescription> <http://www.w3.org/2000/01/rdf-schema#label> \"received ProposalDescription\"@en .\n\
<http://www.dispedia.de/o/receivedProposalDescription> <http://www.w3.org/2000/01/rdf-schema#comment> \"Diese Objekteigenschaft ordnet einem Gesundheitsstatus einen erhaltenen Vorschlagstext zu.\"@de .\n\
<http://www.dispedia.de/o/receivedProposalDescription> <http://www.w3.org/2000/01/rdf-schema#comment> \"This ObjectProperty assigns a received propsal description to a health state.\"@en .\n\
<http://www.dispedia.de/o/receivedProposalDescription> <http://www.w3.org/2000/01/rdf-schema#domain> <http://www.dispedia.de/o/HealthState> .\n\
<http://www.dispedia.de/o/receivedProposalDescription> <http://www.w3.org/2000/01/rdf-schema#range> <http://www.dispedia.de/o/ProposalDescription> .\n\
<http://www.dispedia.de/o/readProposalDescription> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#ObjectProperty> .\n\
<http://www.dispedia.de/o/readProposalDescription> <http://www.w3.org/2000/01/rdf-schema#label> \"Vorschlagstext gelesen\"@de .\n\
<http://www.dispedia.de/o/readProposalDescription> <http://www.w3.org/2000/01/rdf-schema#label> \"read ProposalDescription\"@en .\n\
<http://www.dispedia.de/o/readProposalDescription> <http://www.w3.org/2000/01/rdf-schema#comment> \"Diese Objekteigenschaft ordnet einem Gesundheitsstatus einen gelesenen Vorschlagstext zu.\"@de .\n\
<http://www.dispedia.de/o/readProposalDescription> <http://www.w3.org/2000/01/rdf-schema#comment> \"This ObjectProperty assigns a read propsal description to a health state.\"@en .\n\
<http://www.dispedia.de/o/readProposalDescription> <http://www.w3.org/2000/01/rdf-schema#domain> <http://www.dispedia.de/o/HealthState> .\n\
<http://www.dispedia.de/o/readProposalDescription> <http://www.w3.org/2000/01/rdf-schema#range> <http://www.dispedia.de/o/ProposalDescription> .\n\
<http://www.dispedia.de/o/hsIncludesDrugInteraction> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#ObjectProperty> .\n\
<http://www.dispedia.de/o/hsIncludesDrugInteraction> <http://www.w3.org/2000/01/rdf-schema#label> \"enth\u00E4lt Arzneimittel-Interaktion\"@de .\n\
<http://www.dispedia.de/o/hsIncludesDrugInteraction> <http://www.w3.org/2000/01/rdf-schema#label> \"contains drug interaction\"@en .\n\
<http://www.dispedia.de/o/hsIncludesDrugInteraction> <http://www.w3.org/2000/01/rdf-schema#comment> \"Die Objekteigenschaft weist eine Arzneimittel-Interaktion einem Gesundheitsstatus zu. Damit werden Arzneimittel-Interaktionen beschrieben, die auf Grund von dem Patienten zugewiesenen Arzneimittel-Produkten entstehen.\"@de .\n\
<http://www.dispedia.de/o/hsIncludesDrugInteraction> <http://www.w3.org/2000/01/rdf-schema#comment> \"This ObjectProperty assigns a drug interaction to a health state. These drug interactions may occur between the assigned drug products of a patient.\"@en .\n\
<http://www.dispedia.de/o/hsIncludesDrugInteraction> <http://www.w3.org/2000/01/rdf-schema#domain> <http://www.dispedia.de/o/HealthState> .\n\
<http://www.dispedia.de/o/hsIncludesDrugInteraction> <http://www.w3.org/2000/01/rdf-schema#range> <http://www.dispedia.de/o/DrugInteraction> .\n\
<http://www.dispedia.de/o/includesAssessment> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#ObjectProperty> .\n\
<http://www.dispedia.de/o/includesAssessment> <http://www.w3.org/2000/01/rdf-schema#label> \"enth\u00E4lt Bewertung\"@de .\n\
<http://www.dispedia.de/o/includesAssessment> <http://www.w3.org/2000/01/rdf-schema#label> \"includes assessment\"@en .\n\
<http://www.dispedia.de/o/includesAssessment> <http://www.w3.org/2000/01/rdf-schema#comment> \"Die Objekteigenschaft weist eine Bewertung eines Produktes oder Services einem Gesundheitsstatus zu.\"@de .\n\
<http://www.dispedia.de/o/includesAssessment> <http://www.w3.org/2000/01/rdf-schema#comment> \"This ObjectProperty assigns an assessment of a product or service to a health state.\"@en .\n\
<http://www.dispedia.de/o/includesAssessment> <http://www.w3.org/2000/01/rdf-schema#domain> <http://www.dispedia.de/o/HealthState> .\n\
<http://www.dispedia.de/o/includesAssessment> <http://www.w3.org/2000/01/rdf-schema#range> <http://www.dispedia.de/o/Assessment> .\n\
<http://www.dispedia.de/o/appropriateFor> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#ObjectProperty> .\n\
<http://www.dispedia.de/o/appropriateFor> <http://www.w3.org/2000/01/rdf-schema#label> \"passend f\u00FCr\"@de .\n\
<http://www.dispedia.de/o/appropriateFor> <http://www.w3.org/2000/01/rdf-schema#label> \"appropriate for\"@en .\n\
<http://www.dispedia.de/o/appropriateFor> <http://www.w3.org/2000/01/rdf-schema#comment> \"Diese generische Objekteigenschaft weist einer gegebenen Entit\u00E4t ein passendes Objekt zu.\"@de .\n\
<http://www.dispedia.de/o/appropriateFor> <http://www.w3.org/2000/01/rdf-schema#comment> \"This generic ObjectProperty assigns an appropriate object to a given entity.\"@en .\n\
<http://www.dispedia.de/o/appropriateForProperties> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#ObjectProperty> .\n\
<http://www.dispedia.de/o/appropriateForProperties> <http://www.w3.org/2000/01/rdf-schema#label> \"passend f\u00FCr Eigenschaften\"@de .\n\
<http://www.dispedia.de/o/appropriateForProperties> <http://www.w3.org/2000/01/rdf-schema#label> \"appropriate for properties\"@en .\n\
<http://www.dispedia.de/o/appropriateForProperties> <http://www.w3.org/2000/01/rdf-schema#comment> \"Die Objekteigenschaft weist einen geeigneten Vorschlag einer Menge von Gesundheits-Eigenschaften zu.\"@de .\n\
<http://www.dispedia.de/o/appropriateForProperties> <http://www.w3.org/2000/01/rdf-schema#comment> \"The ObjectProperty assigns an appropriate proposal to a set of health properties.\"@en .\n\
<http://www.dispedia.de/o/appropriateForProperties> <http://www.w3.org/2000/01/rdf-schema#domain> <http://www.dispedia.de/o/Proposal> .\n\
<http://www.dispedia.de/o/appropriateForProperties> <http://www.w3.org/2000/01/rdf-schema#range> <http://www.dispedia.de/o/PropertySet> .\n\
<http://www.dispedia.de/o/appropriateForProperties> <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://www.dispedia.de/o/appropriateFor> .\n\
<http://www.dispedia.de/o/appropriateForSymptoms> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#ObjectProperty> .\n\
<http://www.dispedia.de/o/appropriateForSymptoms> <http://www.w3.org/2000/01/rdf-schema#label> \"passend f\u00FCr Symptome\"@de .\n\
<http://www.dispedia.de/o/appropriateForSymptoms> <http://www.w3.org/2000/01/rdf-schema#label> \"appropriate for symptoms\"@en .\n\
<http://www.dispedia.de/o/appropriateForSymptoms> <http://www.w3.org/2000/01/rdf-schema#comment> \"Die Objekteigenschaft weist einen geeigneten Vorschlag einer Menge von Symptomen zu.\"@de .\n\
<http://www.dispedia.de/o/appropriateForSymptoms> <http://www.w3.org/2000/01/rdf-schema#comment> \"The ObjectProperty assigns an appropriate proposal to a set of symptoms.\"@en .\n\
<http://www.dispedia.de/o/appropriateForSymptoms> <http://www.w3.org/2000/01/rdf-schema#domain> <http://www.dispedia.de/o/Proposal> .\n\
<http://www.dispedia.de/o/appropriateForSymptoms> <http://www.w3.org/2000/01/rdf-schema#range> <http://www.dispedia.de/o/SymptomSet> .\n\
<http://www.dispedia.de/o/appropriateForSymptoms> <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://www.dispedia.de/o/appropriateFor> .\n\
<http://www.dispedia.de/o/containsProposalComponent> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#ObjectProperty> .\n\
<http://www.dispedia.de/o/containsProposalComponent> <http://www.w3.org/2000/01/rdf-schema#label> \"enth\u00E4lt Komponente\"@de .\n\
<http://www.dispedia.de/o/containsProposalComponent> <http://www.w3.org/2000/01/rdf-schema#label> \"contains component\"@en .\n\
<http://www.dispedia.de/o/containsProposalComponent> <http://www.w3.org/2000/01/rdf-schema#comment> \"Die Objekteigenschaft weist eine Vorschlags-Komponente einem Vorschlag zu.\"@de .\n\
<http://www.dispedia.de/o/containsProposalComponent> <http://www.w3.org/2000/01/rdf-schema#comment> \"The ObjectProperty assigns an proposal component to a proposal.\"@en .\n\
<http://www.dispedia.de/o/containsProposalComponent> <http://www.w3.org/2000/01/rdf-schema#domain> <http://www.dispedia.de/o/Proposal> .\n\
<http://www.dispedia.de/o/containsProposalComponent> <http://www.w3.org/2000/01/rdf-schema#range> <http://www.dispedia.de/o/ProposalComponent> .\n\
<http://www.dispedia.de/o/containsProposalComponent> <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://www.dispedia.de/o/contains> .\n\
<http://www.dispedia.de/o/propContainsDrugInteraction> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#ObjectProperty> .\n\
<http://www.dispedia.de/o/propContainsDrugInteraction> <http://www.w3.org/2000/01/rdf-schema#label> \"enth\u00E4lt Arzneimittel-Interaktion\"@de .\n\
<http://www.dispedia.de/o/propContainsDrugInteraction> <http://www.w3.org/2000/01/rdf-schema#label> \"contains drug interaction\"@en .\n\
<http://www.dispedia.de/o/propContainsDrugInteraction> <http://www.w3.org/2000/01/rdf-schema#comment> \"Die Objekteigenschaft weist eine Arzneimittel-Interaktion einem Vorschlag zu. Diese Interaktionen k\u00F6nnen zwischen Arzneimittel unterschiedlicher Vorschlags-Komponenten entstehen.\"@de .\n\
<http://www.dispedia.de/o/propContainsDrugInteraction> <http://www.w3.org/2000/01/rdf-schema#comment> \"This ObjectProperty assigns a drug interaction to a proposal. These interactions may occur between drugs of different proposal components.\"@en .\n\
<http://www.dispedia.de/o/propContainsDrugInteraction> <http://www.w3.org/2000/01/rdf-schema#domain> <http://www.dispedia.de/o/Proposal> .\n\
<http://www.dispedia.de/o/propContainsDrugInteraction> <http://www.w3.org/2000/01/rdf-schema#range> <http://www.dispedia.de/o/DrugInteraction> .\n\
<http://www.dispedia.de/o/contains> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#ObjectProperty> .\n\
<http://www.dispedia.de/o/contains> <http://www.w3.org/2000/01/rdf-schema#label> \"enth\u00E4lt\"@de .\n\
<http://www.dispedia.de/o/contains> <http://www.w3.org/2000/01/rdf-schema#label> \"contains\"@en .\n\
<http://www.dispedia.de/o/contains> <http://www.w3.org/2000/01/rdf-schema#comment> \"Diese generische Objekteigenschaft verbindet Entit\u00E4ten bez\u00FCglich Informationen f\u00FCr Patienten.\"@de .\n\
<http://www.dispedia.de/o/contains> <http://www.w3.org/2000/01/rdf-schema#comment> \"This generic ObjectProperty connects entities concerning information for the patient.\"@en .\n\
<http://www.dispedia.de/o/containsDrug> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#ObjectProperty> .\n\
<http://www.dispedia.de/o/containsDrug> <http://www.w3.org/2000/01/rdf-schema#label> \"enth\u00E4lt Arznei\"@de .\n\
<http://www.dispedia.de/o/containsDrug> <http://www.w3.org/2000/01/rdf-schema#label> \"contains drugs\"@en .\n\
<http://www.dispedia.de/o/containsDrug> <http://www.w3.org/2000/01/rdf-schema#comment> \"Diese Objekteigenschaft ordnet einer Vorschlags-Komponente ein Arzneimittel zu.\"@de .\n\
<http://www.dispedia.de/o/containsDrug> <http://www.w3.org/2000/01/rdf-schema#comment> \"This ObjectProperty assigns a drug to a proposal component.\"@en .\n\
<http://www.dispedia.de/o/containsDrug> <http://www.w3.org/2000/01/rdf-schema#domain> <http://www.dispedia.de/o/ProposalComponent> .\n\
<http://www.dispedia.de/o/containsDrug> <http://www.w3.org/2000/01/rdf-schema#range> <http://bio2rdf.org/drugbank_vocabulary:Drug> .\n\
<http://www.dispedia.de/o/containsDrug> <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://www.dispedia.de/o/contains> .\n\
<http://www.dispedia.de/o/containsFormality> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#ObjectProperty> .\n\
<http://www.dispedia.de/o/containsFormality> <http://www.w3.org/2000/01/rdf-schema#label> \"enth\u00E4lt Formalit\u00E4t\"@de .\n\
<http://www.dispedia.de/o/containsFormality> <http://www.w3.org/2000/01/rdf-schema#label> \"contains formality\"@en .\n\
<http://www.dispedia.de/o/containsFormality> <http://www.w3.org/2000/01/rdf-schema#comment> \"Diese Objekteigenschaft ordnet einer Vorschlags-Komponente eine Formalit\u00E4t zu.\"@de .\n\
<http://www.dispedia.de/o/containsFormality> <http://www.w3.org/2000/01/rdf-schema#comment> \"This ObjectProperty assigns a formality to a proposal component.\"@en .\n\
<http://www.dispedia.de/o/containsFormality> <http://www.w3.org/2000/01/rdf-schema#domain> <http://www.dispedia.de/o/ProposalComponent> .\n\
<http://www.dispedia.de/o/containsFormality> <http://www.w3.org/2000/01/rdf-schema#range> <http://www.dispedia.de/o/Formality> .\n\
<http://www.dispedia.de/o/containsFormality> <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://www.dispedia.de/o/contains> .\n\
<http://www.dispedia.de/o/containsMedicalDevice> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#ObjectProperty> .\n\
<http://www.dispedia.de/o/containsMedicalDevice> <http://www.w3.org/2000/01/rdf-schema#label> \"enth\u00E4lt Medizinprodukt\"@de .\n\
<http://www.dispedia.de/o/containsMedicalDevice> <http://www.w3.org/2000/01/rdf-schema#label> \"contains medical device\"@en .\n\
<http://www.dispedia.de/o/containsMedicalDevice> <http://www.w3.org/2000/01/rdf-schema#comment> \"Diese Objekteigenschaft ordnet einer Vorschlags-Komponente ein Medizinprodukt zu.\"@de .\n\
<http://www.dispedia.de/o/containsMedicalDevice> <http://www.w3.org/2000/01/rdf-schema#comment> \"This ObjectProperty assigns a medical device to a proposal component.\"@en .\n\
<http://www.dispedia.de/o/containsMedicalDevice> <http://www.w3.org/2000/01/rdf-schema#domain> <http://www.dispedia.de/o/ProposalComponent> .\n\
<http://www.dispedia.de/o/containsMedicalDevice> <http://www.w3.org/2000/01/rdf-schema#range> <http://www.dispedia.de/o/MedicalDevice> .\n\
<http://www.dispedia.de/o/containsMedicalDevice> <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://www.dispedia.de/o/contains> .\n\
<http://www.dispedia.de/o/containsProposalDescription> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#ObjectProperty> .\n\
<http://www.dispedia.de/o/containsProposalDescription> <http://www.w3.org/2000/01/rdf-schema#label> \"enth\u00E4lt Informationstext\"@de .\n\
<http://www.dispedia.de/o/containsProposalDescription> <http://www.w3.org/2000/01/rdf-schema#label> \"contains Proposal Description Text\"@en .\n\
<http://www.dispedia.de/o/containsProposalDescription> <http://www.w3.org/2000/01/rdf-schema#comment> \"Diese Objekteigenschaft ordnet einer Vorschlags-Komponente einen Informationstext zu.\"@de .\n\
<http://www.dispedia.de/o/containsProposalDescription> <http://www.w3.org/2000/01/rdf-schema#comment> \"This ObjectProperty assigns a proposal description to a proposal component.\"@en .\n\
<http://www.dispedia.de/o/containsProposalDescription> <http://www.w3.org/2000/01/rdf-schema#domain> <http://www.dispedia.de/o/ProposalComponent> .\n\
<http://www.dispedia.de/o/containsProposalDescription> <http://www.w3.org/2000/01/rdf-schema#range> <http://www.dispedia.de/o/ProposalDescription> .\n\
<http://www.dispedia.de/o/containsProposalDescription> <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://www.dispedia.de/o/contains> .\n\
<http://www.dispedia.de/o/containsAssistiveProduct> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#ObjectProperty> .\n\
<http://www.dispedia.de/o/containsAssistiveProduct> <http://www.w3.org/2000/01/rdf-schema#label> \"enth\u00E4lt Assistenzprodukt\"@de .\n\
<http://www.dispedia.de/o/containsAssistiveProduct> <http://www.w3.org/2000/01/rdf-schema#label> \"contains assistive product\"@en .\n\
<http://www.dispedia.de/o/containsAssistiveProduct> <http://www.w3.org/2000/01/rdf-schema#comment> \"Diese Objekteigenschaft ordnet einer Vorschlags-Komponente ein Assistenzprodukt zu.\"@de .\n\
<http://www.dispedia.de/o/containsAssistiveProduct> <http://www.w3.org/2000/01/rdf-schema#comment> \"This ObjectProperty assigns an assistive product to a proposal component.\"@en .\n\
<http://www.dispedia.de/o/containsAssistiveProduct> <http://www.w3.org/2000/01/rdf-schema#domain> <http://www.dispedia.de/o/ProposalComponent> .\n\
<http://www.dispedia.de/o/containsAssistiveProduct> <http://www.w3.org/2000/01/rdf-schema#range> <http://www.dispedia.de/o/AssistiveProduct> .\n\
<http://www.dispedia.de/o/containsAssistiveProduct> <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://www.dispedia.de/o/contains> .\n\
<http://www.dispedia.de/o/containsService> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#ObjectProperty> .\n\
<http://www.dispedia.de/o/containsService> <http://www.w3.org/2000/01/rdf-schema#label> \"enth\u00E4lt Service\"@de .\n\
<http://www.dispedia.de/o/containsService> <http://www.w3.org/2000/01/rdf-schema#label> \"contains service\"@en .\n\
<http://www.dispedia.de/o/containsService> <http://www.w3.org/2000/01/rdf-schema#comment> \"Diese Objekteigenschaft ordnet einer Vorschlags-Komponente einen Service zu.\"@de .\n\
<http://www.dispedia.de/o/containsService> <http://www.w3.org/2000/01/rdf-schema#comment> \"This ObjectProperty assigns a service to a proposal component.\"@en .\n\
<http://www.dispedia.de/o/containsService> <http://www.w3.org/2000/01/rdf-schema#domain> <http://www.dispedia.de/o/ProposalComponent> .\n\
<http://www.dispedia.de/o/containsService> <http://www.w3.org/2000/01/rdf-schema#range> <http://www.serviceOntology.org/Service> .\n\
<http://www.dispedia.de/o/containsService> <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://www.dispedia.de/o/contains> .\n\
<http://www.dispedia.de/o/successorOf> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#ObjectProperty> .\n\
<http://www.dispedia.de/o/successorOf> <http://www.w3.org/2000/01/rdf-schema#label> \"Nachfolger von\"@de .\n\
<http://www.dispedia.de/o/successorOf> <http://www.w3.org/2000/01/rdf-schema#label> \"successor of\"@en .\n\
<http://www.dispedia.de/o/successorOf> <http://www.w3.org/2000/01/rdf-schema#comment> \"Diese generische Objekteigenschaft beschreibt ein Objekt als zeitlichen Nachfolger einer gegebenen Entit\u00E4t.\"@de .\n\
<http://www.dispedia.de/o/successorOf> <http://www.w3.org/2000/01/rdf-schema#comment> \"This generic ObjectProperty describes an object as the successor of a given entity.\"@en .\n\
<http://www.dispedia.de/o/successorOfProposalComponent> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#ObjectProperty> .\n\
<http://www.dispedia.de/o/successorOfProposalComponent> <http://www.w3.org/2000/01/rdf-schema#label> \"Nachfolger der Komponente\"@de .\n\
<http://www.dispedia.de/o/successorOfProposalComponent> <http://www.w3.org/2000/01/rdf-schema#label> \"successor of component\"@en .\n\
<http://www.dispedia.de/o/successorOfProposalComponent> <http://www.w3.org/2000/01/rdf-schema#comment> \"Diese Objekteigenschaft beschreibt eine Vorschlags-Komponente als zeitlichen Nachfolger einer anderen Vorschlags-Komponente.\"@de .\n\
<http://www.dispedia.de/o/successorOfProposalComponent> <http://www.w3.org/2000/01/rdf-schema#comment> \"This ObjectProperty describes a proposal component as the successor of an other proposal component.\"@en .\n\
<http://www.dispedia.de/o/successorOfProposalComponent> <http://www.w3.org/2000/01/rdf-schema#range> <http://www.dispedia.de/o/ProposalComponent> .\n\
<http://www.dispedia.de/o/successorOfProposalComponent> <http://www.w3.org/2000/01/rdf-schema#domain> <http://www.dispedia.de/o/ProposalComponent> .\n\
<http://www.dispedia.de/o/successorOfProposalComponent> <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://www.dispedia.de/o/successorOf> .\n\
<http://www.dispedia.de/o/propCompContainsDrugInteraction> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#ObjectProperty> .\n\
<http://www.dispedia.de/o/propCompContainsDrugInteraction> <http://www.w3.org/2000/01/rdf-schema#label> \"enth\u00E4lt Arzneimittel-Interaktion\"@de .\n\
<http://www.dispedia.de/o/propCompContainsDrugInteraction> <http://www.w3.org/2000/01/rdf-schema#label> \"contains drug interaction\"@en .\n\
<http://www.dispedia.de/o/propCompContainsDrugInteraction> <http://www.w3.org/2000/01/rdf-schema#comment> \"Die Objekteigenschaft weist eine Arzneimittel-Interaktion einer Vorschlags-Komponente zu. Diese Interaktionen k\u00F6nnen zwischen mehreren zugewiesenen Arzneimitteln einer Vorschlagskomponente entstehen.\"@de .\n\
<http://www.dispedia.de/o/propCompContainsDrugInteraction> <http://www.w3.org/2000/01/rdf-schema#comment> \"This ObjectProperty assigns a drug interaction to a proposal component. These interactions may occur between several assigned drugs of one proposal component.\"@en .\n\
<http://www.dispedia.de/o/propCompContainsDrugInteraction> <http://www.w3.org/2000/01/rdf-schema#domain> <http://www.dispedia.de/o/ProposalComponent> .\n\
<http://www.dispedia.de/o/propCompContainsDrugInteraction> <http://www.w3.org/2000/01/rdf-schema#range> <http://www.dispedia.de/o/DrugInteraction> .\n\
<http://www.dispedia.de/o/usefulFor> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#ObjectProperty> .\n\
<http://www.dispedia.de/o/usefulFor> <http://www.w3.org/2000/01/rdf-schema#label> \"n\u00FCtzlich f\u00FCr\"@de .\n\
<http://www.dispedia.de/o/usefulFor> <http://www.w3.org/2000/01/rdf-schema#label> \"useful for\"@en .\n\
<http://www.dispedia.de/o/usefulFor> <http://www.w3.org/2000/01/rdf-schema#comment> \"Diese Objekteigenschaft ordnet einer Vorschlags-Komponente eine Organisation zu, f\u00FCr welche sie n\u00FCtzlich ist.\"@de .\n\
<http://www.dispedia.de/o/usefulFor> <http://www.w3.org/2000/01/rdf-schema#comment> \"This ObjectProperty assigns an organisation to a proposal component which is useful for this organisation.\"@en .\n\
<http://www.dispedia.de/o/usefulFor> <http://www.w3.org/2000/01/rdf-schema#domain> <http://www.dispedia.de/o/ProposalDescription> .\n\
<http://www.dispedia.de/o/usefulFor> <http://www.w3.org/2000/01/rdf-schema#range> <http://www.serviceOntology.org/Organization> .\n\
<http://www.dispedia.de/o/suitableFor> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#ObjectProperty> .\n\
<http://www.dispedia.de/o/suitableFor> <http://www.w3.org/2000/01/rdf-schema#label> \"geeignet f\u00FCr\"@de .\n\
<http://www.dispedia.de/o/suitableFor> <http://www.w3.org/2000/01/rdf-schema#label> \"suitable for\"@en .\n\
<http://www.dispedia.de/o/suitableFor> <http://www.w3.org/2000/01/rdf-schema#comment> \"Diese generische Objekteigenschaft ordnet einer Entit\u00E4t ein Objekt zu, f\u00FCr welche es geeignet ist.\"@de .\n\
<http://www.dispedia.de/o/suitableFor> <http://www.w3.org/2000/01/rdf-schema#comment> \"This generic ObjectProperty assigns an object to an entity for which this object is suitable.\"@en .\n\
<http://www.dispedia.de/o/suitableForSensitive> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#ObjectProperty> .\n\
<http://www.dispedia.de/o/suitableForSensitive> <http://www.w3.org/2000/01/rdf-schema#label> \"geeignet f\u00FCr sensible\"@de .\n\
<http://www.dispedia.de/o/suitableForSensitive> <http://www.w3.org/2000/01/rdf-schema#label> \"suitable for sensitive\"@en .\n\
<http://www.dispedia.de/o/suitableForSensitive> <http://www.w3.org/2000/01/rdf-schema#comment> \"Diese generische Objekteigenschaft ordnet einer als \\"sensibel\\" eingestuften Entit\u00E4t ein Objekt zu, f\u00FCr welche es geeignet ist.\"@de .\n\
<http://www.dispedia.de/o/suitableForSensitive> <http://www.w3.org/2000/01/rdf-schema#comment> \"This generic ObjectProperty assigns an object to an entity - classified as sensitive - for which this object is suitable.\"@en .\n\
<http://www.dispedia.de/o/suitableForSensitive> <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://www.dispedia.de/o/suitableFor> .\n\
<http://www.dispedia.de/o/suitableForExperienced> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#ObjectProperty> .\n\
<http://www.dispedia.de/o/suitableForExperienced> <http://www.w3.org/2000/01/rdf-schema#label> \"geeignet f\u00FCr Erfahrene\"@de .\n\
<http://www.dispedia.de/o/suitableForExperienced> <http://www.w3.org/2000/01/rdf-schema#label> \"suitable for experienced\"@en .\n\
<http://www.dispedia.de/o/suitableForExperienced> <http://www.w3.org/2000/01/rdf-schema#comment> \"Diese generische Objekteigenschaft ordnet einer als \\"erfahren\\" eingestuften Entit\u00E4t ein Objekt zu, f\u00FCr welche es geeignet ist.\"@de .\n\
<http://www.dispedia.de/o/suitableForExperienced> <http://www.w3.org/2000/01/rdf-schema#comment> \"This generic ObjectProperty assigns an object to an entity - classified as experienced - for which this object is suitable.\"@en .\n\
<http://www.dispedia.de/o/suitableForExperienced> <http://www.w3.org/2000/01/rdf-schema#subPropertyOf> <http://www.dispedia.de/o/suitableFor> .\n\
<urn:swrl#x> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2003/11/swrl#Variable> .\n\
<urn:swrl#y> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2003/11/swrl#Variable> .\n\
_:genid1 <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2003/11/swrl#ClassAtom> .\n\
_:genid1 <http://www.w3.org/2003/11/swrl#argument1> <urn:swrl#y> .\n\
_:genid1 <http://www.w3.org/2003/11/swrl#classPredicate> <http://www.dispedia.de/o/Patient> .\n\
_:genid2 <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2003/11/swrl#ClassAtom> .\n\
_:genid2 <http://www.w3.org/2003/11/swrl#argument1> <urn:swrl#x> .\n\
_:genid2 <http://www.w3.org/2003/11/swrl#classPredicate> <http://www.dispedia.de/o/ProposalDescription> .\n\
_:genid3 <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2003/11/swrl#AtomList> .\n\
_:genid3 <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .\n\
_:genid3 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first> _:genid2 .\n\
_:genid4 <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2003/11/swrl#AtomList> .\n\
_:genid4 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first> _:genid1 .\n\
_:genid4 <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:genid3 .\n\
_:genid5 <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2003/11/swrl#IndividualPropertyAtom> .\n\
_:genid5 <http://www.w3.org/2003/11/swrl#propertyPredicate> <http://www.dispedia.de/o/suitableFor> .\n\
_:genid5 <http://www.w3.org/2003/11/swrl#argument1> <urn:swrl#x> .\n\
_:genid5 <http://www.w3.org/2003/11/swrl#argument2> <urn:swrl#y> .\n\
_:genid6 <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2003/11/swrl#AtomList> .\n\
_:genid6 <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .\n\
_:genid6 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first> _:genid5 .\n\
_:genid7 <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2003/11/swrl#Imp> .\n\
_:genid7 <http://www.w3.org/2003/11/swrl#body> _:genid4 .\n\
_:genid7 <http://www.w3.org/2003/11/swrl#head> _:genid6 .\n\
_:genid1a <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2003/11/swrl#ClassAtom> .\n\
_:genid1a <http://www.w3.org/2003/11/swrl#argument1> <urn:swrl#y> .\n\
_:genid1a <http://www.w3.org/2003/11/swrl#classPredicate> <http://www.dispedia.de/o/ExperiencedPatient> .\n\
_:genid2a <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2003/11/swrl#ClassAtom> .\n\
_:genid2a <http://www.w3.org/2003/11/swrl#classPredicate> <http://www.dispedia.de/o/ExperiencedProposalDescription> .\n\
_:genid2a <http://www.w3.org/2003/11/swrl#argument1> <urn:swrl#x> .\n\
_:genid3a <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2003/11/swrl#AtomList> .\n\
_:genid3a <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .\n\
_:genid3a <http://www.w3.org/1999/02/22-rdf-syntax-ns#first> _:genid2a .\n\
_:genid4a <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2003/11/swrl#AtomList> .\n\
_:genid4a <http://www.w3.org/1999/02/22-rdf-syntax-ns#first> _:genid1a .\n\
_:genid4a <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:genid3a .\n\
_:genid5a <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2003/11/swrl#IndividualPropertyAtom> .\n\
_:genid5a <http://www.w3.org/2003/11/swrl#propertyPredicate> <http://www.dispedia.de/o/suitableForExperienced> .\n\
_:genid5a <http://www.w3.org/2003/11/swrl#argument1> <urn:swrl#x> .\n\
_:genid5a <http://www.w3.org/2003/11/swrl#argument2> <urn:swrl#y> .\n\
_:genid6a <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2003/11/swrl#AtomList> .\n\
_:genid6a <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .\n\
_:genid6a <http://www.w3.org/1999/02/22-rdf-syntax-ns#first> _:genid5a .\n\
_:genid7a <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2003/11/swrl#Imp> .\n\
_:genid7a <http://www.w3.org/2003/11/swrl#body> _:genid4a .\n\
_:genid7a <http://www.w3.org/2003/11/swrl#head> _:genid6a .\n\
_:genid1b <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2003/11/swrl#ClassAtom> .\n\
_:genid1b <http://www.w3.org/2003/11/swrl#argument1> <urn:swrl#y> .\n\
_:genid1b <http://www.w3.org/2003/11/swrl#classPredicate> <http://www.dispedia.de/o/SensitivePatient> .\n\
_:genid2b <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2003/11/swrl#ClassAtom> .\n\
_:genid2b <http://www.w3.org/2003/11/swrl#classPredicate> <http://www.dispedia.de/o/SensitiveProposalDescription> .\n\
_:genid2b <http://www.w3.org/2003/11/swrl#argument1> <urn:swrl#x> .\n\
_:genid3b <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2003/11/swrl#AtomList> .\n\
_:genid3b <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .\n\
_:genid3b <http://www.w3.org/1999/02/22-rdf-syntax-ns#first> _:genid2b .\n\
_:genid4b <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2003/11/swrl#AtomList> .\n\
_:genid4b <http://www.w3.org/1999/02/22-rdf-syntax-ns#first> _:genid1b .\n\
_:genid4b <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:genid3b .\n\
_:genid5b <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2003/11/swrl#IndividualPropertyAtom> .\n\
_:genid5b <http://www.w3.org/2003/11/swrl#propertyPredicate> <http://www.dispedia.de/o/suitableForSensitive> .\n\
_:genid5b <http://www.w3.org/2003/11/swrl#argument1> <urn:swrl#x> .\n\
_:genid5b <http://www.w3.org/2003/11/swrl#argument2> <urn:swrl#y> .\n\
_:genid6b <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2003/11/swrl#AtomList> .\n\
_:genid6b <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .\n\
_:genid6b <http://www.w3.org/1999/02/22-rdf-syntax-ns#first> _:genid5b .\n\
_:genid7b <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2003/11/swrl#Imp> .\n\
_:genid7b <http://www.w3.org/2003/11/swrl#body> _:genid4b .\n\
_:genid7b <http://www.w3.org/2003/11/swrl#head> _:genid6b .\n\
<http://www.dispedia.de/o/startDate> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#DatatypeProperty> .\n\
<http://www.dispedia.de/o/startDate> <http://www.w3.org/2000/01/rdf-schema#label> \"Startdatum\"@de .\n\
<http://www.dispedia.de/o/startDate> <http://www.w3.org/2000/01/rdf-schema#label> \"start date\"@en .\n\
<http://www.dispedia.de/o/startDate> <http://www.w3.org/2000/01/rdf-schema#comment> \"Die Datentyp-Eigenschaft beschreibt den Zeitpunkt des Beginns einer Krankheit.\"@de .\n\
<http://www.dispedia.de/o/startDate> <http://www.w3.org/2000/01/rdf-schema#comment> \"This DatatypeProperty describes the date of the start of a certain disease.\"@en .\n\
<http://www.dispedia.de/o/startDate> <http://www.w3.org/2000/01/rdf-schema#domain> <http://www.dispedia.de/o/Disease> .\n\
<http://www.dispedia.de/o/startDate> <http://www.w3.org/2000/01/rdf-schema#range> <http://www.w3.org/2001/XMLSchema#dateTime> .\n\
<http://www.dispedia.de/o/endDate> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#DatatypeProperty> .\n\
<http://www.dispedia.de/o/endDate> <http://www.w3.org/2000/01/rdf-schema#label> \"Enddatum\"@de .\n\
<http://www.dispedia.de/o/endDate> <http://www.w3.org/2000/01/rdf-schema#label> \"end date\"@en .\n\
<http://www.dispedia.de/o/endDate> <http://www.w3.org/2000/01/rdf-schema#comment> \"Die Datentyp-Eigenschaft beschreibt den Zeitpunkt des Endes einer Krankheit.\"@de .\n\
<http://www.dispedia.de/o/endDate> <http://www.w3.org/2000/01/rdf-schema#comment> \"This DatatypeProperty describes the date of the end of a certain disease.\"@en .\n\
<http://www.dispedia.de/o/endDate> <http://www.w3.org/2000/01/rdf-schema#domain> <http://www.dispedia.de/o/Disease> .\n\
<http://www.dispedia.de/o/endDate> <http://www.w3.org/2000/01/rdf-schema#range> <http://www.w3.org/2001/XMLSchema#dateTime> .\n\
<http://www.dispedia.de/o/content> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#DatatypeProperty> .\n\
<http://www.dispedia.de/o/content> <http://www.w3.org/2000/01/rdf-schema#label> \"Inhalt\"@de .\n\
<http://www.dispedia.de/o/content> <http://www.w3.org/2000/01/rdf-schema#label> \"content\"@en .\n\
<http://www.dispedia.de/o/content> <http://www.w3.org/2000/01/rdf-schema#comment> \"Diese Datentyp-Eigenschaft beschreibt den Inhalt eines Vorschlagstextes.\"@de .\n\
<http://www.dispedia.de/o/content> <http://www.w3.org/2000/01/rdf-schema#comment> \"This DatatypeProperty describes the content of a propsal description.\"@en .\n\
<http://www.dispedia.de/o/content> <http://www.w3.org/2000/01/rdf-schema#domain> <http://www.dispedia.de/o/ProposalDescription> .\n\
<http://www.dispedia.de/o/content> <http://www.w3.org/2000/01/rdf-schema#range> <http://www.w3.org/2001/XMLSchema#string> .\n\
<http://www.dispedia.de/o/journeyToWork> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#DatatypeProperty> .\n\
<http://www.dispedia.de/o/journeyToWork> <http://www.w3.org/2000/01/rdf-schema#label> \"Arbeitsweg\"@de .\n\
<http://www.dispedia.de/o/journeyToWork> <http://www.w3.org/2000/01/rdf-schema#label> \"Journey to work\"@en .\n\
<http://www.dispedia.de/o/journeyToWork> <http://www.w3.org/2000/01/rdf-schema#comment> \"Die Datentyp-Eigenschaft beschreibt den Weg zur Arbeit der betroffenen Person.\"@de .\n\
<http://www.dispedia.de/o/journeyToWork> <http://www.w3.org/2000/01/rdf-schema#comment> \"The DatatypeProperty describes the journey to work of the respective person.\"@en .\n\
<http://www.dispedia.de/o/journeyToWork> <http://www.w3.org/2000/01/rdf-schema#domain> <http://www.dispedia.de/o/Person> .\n\
<http://www.dispedia.de/o/journeyToWork> <http://www.w3.org/2000/01/rdf-schema#range> <http://www.w3.org/2001/XMLSchema#string> .\n\
<http://www.dispedia.de/o/birthName> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#DatatypeProperty> .\n\
<http://www.dispedia.de/o/birthName> <http://www.w3.org/2000/01/rdf-schema#label> \"Geburtsname\"@de .\n\
<http://www.dispedia.de/o/birthName> <http://www.w3.org/2000/01/rdf-schema#label> \"Name at birth\"@en .\n\
<http://www.dispedia.de/o/birthName> <http://www.w3.org/2000/01/rdf-schema#comment> \"Die Datentyp-Eigenschaft repr\u00E4sentiert den Geburtsnamen der betroffenen Person.\"@de .\n\
<http://www.dispedia.de/o/birthName> <http://www.w3.org/2000/01/rdf-schema#comment> \"The DatatypeProperty represents the name at birth of the respective person.\"@en .\n\
<http://www.dispedia.de/o/birthName> <http://www.w3.org/2000/01/rdf-schema#domain> <http://www.dispedia.de/o/Person> .\n\
<http://www.dispedia.de/o/birthName> <http://www.w3.org/2000/01/rdf-schema#range> <http://www.w3.org/2001/XMLSchema#string> .\n\
<http://www.dispedia.de/o/education> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#DatatypeProperty> .\n\
<http://www.dispedia.de/o/education> <http://www.w3.org/2000/01/rdf-schema#label> \"Ausbildung\"@de .\n\
<http://www.dispedia.de/o/education> <http://www.w3.org/2000/01/rdf-schema#label> \"Education\"@en .\n\
<http://www.dispedia.de/o/education> <http://www.w3.org/2000/01/rdf-schema#comment> \"Die Datentyp-Eigenschaft beschreibt den Ausbildungsstand der betroffenen Person.\"@de .\n\
<http://www.dispedia.de/o/education> <http://www.w3.org/2000/01/rdf-schema#comment> \"The DatatypeProperty describes the educational level of the respective person.\"@en .\n\
<http://www.dispedia.de/o/education> <http://www.w3.org/2000/01/rdf-schema#domain> <http://www.dispedia.de/o/Person> .\n\
<http://www.dispedia.de/o/education> <http://www.w3.org/2000/01/rdf-schema#range> <http://www.w3.org/2001/XMLSchema#string> .\n\
<http://www.dispedia.de/o/containsDrugInteractor> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#ObjectProperty> .\n\
<http://www.dispedia.de/o/containsDrugInteractor> <http://www.w3.org/2000/01/rdf-schema#label> \"Interakteur\"@de .\n\
<http://www.dispedia.de/o/containsDrugInteractor> <http://www.w3.org/2000/01/rdf-schema#label> \"interactor\"@en .\n\
<http://www.dispedia.de/o/containsDrugInteractor> <http://www.w3.org/2000/01/rdf-schema#comment> \"Die Objekteigenschaft beschreibt ein an der gegebenen Interaktion betroffenes Arzneimittel.\"@de .\n\
<http://www.dispedia.de/o/containsDrugInteractor> <http://www.w3.org/2000/01/rdf-schema#comment> \"This ObjectProperty describes an affected drug for the given interaction.\"@en .\n\
<http://www.dispedia.de/o/containsDrugInteractor> <http://www.w3.org/2000/01/rdf-schema#domain> <http://www.dispedia.de/o/DrugInteraction> .\n\
<http://www.dispedia.de/o/containsDrugInteractor> <http://www.w3.org/2000/01/rdf-schema#range> <http://bio2rdf.org/drugbank_vocabulary:Drug> .\n\
<http://www.dispedia.de/o/assessedProductOrService> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#ObjectProperty> .\n\
<http://www.dispedia.de/o/assessedProductOrService> <http://www.w3.org/2000/01/rdf-schema#label> \"bewertetes Produkt oder Service\"@de .\n\
<http://www.dispedia.de/o/assessedProductOrService> <http://www.w3.org/2000/01/rdf-schema#label> \"assessed product or service\"@en .\n\
<http://www.dispedia.de/o/assessedProductOrService> <http://www.w3.org/2000/01/rdf-schema#comment> \"Die Objekteigenschaft weist ein Produkt oder Service der jeweiligen Bewertung zu.\"@de .\n\
<http://www.dispedia.de/o/assessedProductOrService> <http://www.w3.org/2000/01/rdf-schema#comment> \"This ObjectProperty assigns a product or service to the specific assessment.\"@en .\n\
<http://www.dispedia.de/o/assessedProductOrService> <http://www.w3.org/2000/01/rdf-schema#domain> <http://www.dispedia.de/o/Assessment> .\n\
<http://www.dispedia.de/o/assessedProductOrService> <http://www.w3.org/2000/01/rdf-schema#range> <http://purl.org/goodrelations/v1#ProductOrService> .\n\
<http://www.dispedia.de/o/tolerability> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#DatatypeProperty> .\n\
<http://www.dispedia.de/o/tolerability> <http://www.w3.org/2000/01/rdf-schema#label> \"Vertr\u00E4glichkeit\"@de .\n\
<http://www.dispedia.de/o/tolerability> <http://www.w3.org/2000/01/rdf-schema#label> \"tolerability\"@en .\n\
<http://www.dispedia.de/o/tolerability> <http://www.w3.org/2000/01/rdf-schema#comment> \"Die Eigenschaft beschreibt die Vertr\u00E4glichkeit des bewerteten Produktes oder Services durch eine numerische Skala.\"@de .\n\
<http://www.dispedia.de/o/tolerability> <http://www.w3.org/2000/01/rdf-schema#comment> \"This property describes the tolerability of the assessed product or service by a numerical scale.\"@en .\n\
<http://www.dispedia.de/o/tolerability> <http://www.w3.org/2000/01/rdf-schema#domain> <http://www.dispedia.de/o/Assessment> .\n\
<http://www.dispedia.de/o/tolerability> <http://www.w3.org/2000/01/rdf-schema#range> <http://www.w3.org/2001/XMLSchema#integer> .\n\
<http://www.dispedia.de/o/effectiveness> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#DatatypeProperty> .\n\
<http://www.dispedia.de/o/effectiveness> <http://www.w3.org/2000/01/rdf-schema#label> \"Wirksamkeit\"@de .\n\
<http://www.dispedia.de/o/effectiveness> <http://www.w3.org/2000/01/rdf-schema#label> \"effectiveness\"@en .\n\
<http://www.dispedia.de/o/effectiveness> <http://www.w3.org/2000/01/rdf-schema#comment> \"Die Eigenschaft beschreibt die Wirksamkeit des bewerteten Produktes oder Services durch eine numerische Skala.\"@de .\n\
<http://www.dispedia.de/o/effectiveness> <http://www.w3.org/2000/01/rdf-schema#comment> \"This property describes the effectiveness of the assessed product or service by a numerical scale.\"@en .\n\
<http://www.dispedia.de/o/effectiveness> <http://www.w3.org/2000/01/rdf-schema#domain> <http://www.dispedia.de/o/Assessment> .\n\
<http://www.dispedia.de/o/effectiveness> <http://www.w3.org/2000/01/rdf-schema#range> <http://www.w3.org/2001/XMLSchema#integer> .\n\
<http://www.dispedia.de/o/Place> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#Class> .\n\
<http://www.dispedia.de/o/Place> <http://www.w3.org/2000/01/rdf-schema#label> \"Adresse\"@de .\n\
<http://www.dispedia.de/o/Place> <http://www.w3.org/2000/01/rdf-schema#label> \"Address\"@en .\n\
<http://www.dispedia.de/o/Place> <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://schema.org/Place> .\n\
<http://www.dispedia.de/o/ALS> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#Class> .\n\
<http://www.dispedia.de/o/ALS> <http://www.w3.org/2000/01/rdf-schema#label> \"ALS\"@de .\n\
<http://www.dispedia.de/o/ALS> <http://www.w3.org/2000/01/rdf-schema#label> \"ALS\"@en .\n\
<http://www.dispedia.de/o/ALS> <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://www.dispedia.de/o/Disease> .\n\
<http://www.dispedia.de/o/ALS> <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.bioontology.org/ontology/ICD10/G12.2> .\n\
<http://www.dispedia.de/o/ALS> <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.bioontology.org/ontology/SNOMEDCT/86044005> .\n\
<http://www.dispedia.de/o/ALS> <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.bioontology.org/ontology/MSH/D000690> .\n\
<http://www.dispedia.de/o/ALS> <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.bioontology.org/ontology/MEDLINEPLUS/T135> .\n\
<http://www.dispedia.de/o/ALS> <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://www.orphanet.org/rdfns#pat_id_106> .\n\
<http://www.dispedia.de/o/ALS> <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://dbpedia.org/resource/Amyotrophic_lateral_sclerosis> .\n\
<http://www.dispedia.de/o/AssistiveProduct> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#Class> .\n\
<http://www.dispedia.de/o/AssistiveProduct> <http://www.w3.org/2000/01/rdf-schema#label> \"Assistenzprodukt\"@de .\n\
<http://www.dispedia.de/o/AssistiveProduct> <http://www.w3.org/2000/01/rdf-schema#label> \"Assistive product\"@en .\n\
<http://www.dispedia.de/o/AssistiveProduct> <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.org/goodrelations/v1#ProductOrService> .\n\
<http://www.dispedia.de/o/MedicalDevice> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#Class> .\n\
<http://www.dispedia.de/o/MedicalDevice> <http://www.w3.org/2000/01/rdf-schema#label> \"Medizinprodukt\"@de .\n\
<http://www.dispedia.de/o/MedicalDevice> <http://www.w3.org/2000/01/rdf-schema#label> \"Medical Device\"@en .\n\
<http://www.dispedia.de/o/MedicalDevice> <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.org/goodrelations/v1#ProductOrService> .\n\
<http://www.dispedia.de/o/Formality> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#Class> .\n\
<http://www.dispedia.de/o/Formality> <http://www.w3.org/2000/01/rdf-schema#label> \"Formalit\u00E4t\"@de .\n\
<http://www.dispedia.de/o/Formality> <http://www.w3.org/2000/01/rdf-schema#label> \"Formality\"@en .\n\
<http://www.dispedia.de/o/Formality> <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://purl.org/goodrelations/v1#ProductOrService> .\n\
<http://www.dispedia.de/o/Disease> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#Class> .\n\
<http://www.dispedia.de/o/Disease> <http://www.w3.org/2000/01/rdf-schema#label> \"Krankheit\"@de .\n\
<http://www.dispedia.de/o/Disease> <http://www.w3.org/2000/01/rdf-schema#label> \"Disease\"@en .\n\
<http://www.dispedia.de/o/Disease> <http://www.w3.org/2002/07/owl#equivalentClass> <http://dbpedia.org/ontology/Disease> .\n\
<http://www.dispedia.de/o/Disease> <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://schema.org/MedicalEntity> .\n\
<http://www.dispedia.de/o/HealthState> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#Class> .\n\
<http://www.dispedia.de/o/HealthState> <http://www.w3.org/2000/01/rdf-schema#label> \"Gesundheitsstatus\"@de .\n\
<http://www.dispedia.de/o/HealthState> <http://www.w3.org/2000/01/rdf-schema#label> \"Health state\"@en .\n\
<http://www.dispedia.de/o/ProposalComponent> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#Class> .\n\
<http://www.dispedia.de/o/ProposalComponent> <http://www.w3.org/2000/01/rdf-schema#label> \"Vorschlags-Komponente\"@de .\n\
<http://www.dispedia.de/o/ProposalComponent> <http://www.w3.org/2000/01/rdf-schema#label> \"Proposal component\"@en .\n\
<http://www.dispedia.de/o/ProposalDescription> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#Class> .\n\
<http://www.dispedia.de/o/ProposalDescription> <http://www.w3.org/2000/01/rdf-schema#label> \"Vorschlagstext\"@de .\n\
<http://www.dispedia.de/o/ProposalDescription> <http://www.w3.org/2000/01/rdf-schema#label> \"Proposal description\"@en .\n\
<http://www.dispedia.de/o/SensitiveProposalDescription> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#Class> .\n\
<http://www.dispedia.de/o/SensitiveProposalDescription> <http://www.w3.org/2000/01/rdf-schema#label> \"Information f\u00FCr sensible Personen\"@de .\n\
<http://www.dispedia.de/o/SensitiveProposalDescription> <http://www.w3.org/2000/01/rdf-schema#label> \"Information for sensitive person\"@en .\n\
<http://www.dispedia.de/o/SensitiveProposalDescription> <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://www.dispedia.de/o/ProposalDescription> .\n\
<http://www.dispedia.de/o/ExperiencedProposalDescription> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#Class> .\n\
<http://www.dispedia.de/o/ExperiencedProposalDescription> <http://www.w3.org/2000/01/rdf-schema#label> \"Information f\u00FCr erfahrene Personen\"@de .\n\
<http://www.dispedia.de/o/ExperiencedProposalDescription> <http://www.w3.org/2000/01/rdf-schema#label> \"Information for experienced person\"@en .\n\
<http://www.dispedia.de/o/ExperiencedProposalDescription> <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://www.dispedia.de/o/ProposalDescription> .\n\
<http://www.dispedia.de/o/SpecialProposalDescription> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#Class> .\n\
<http://www.dispedia.de/o/SpecialProposalDescription> <http://www.w3.org/2000/01/rdf-schema#label> \"spezielle Information\"@de .\n\
<http://www.dispedia.de/o/SpecialProposalDescription> <http://www.w3.org/2000/01/rdf-schema#label> \"special information for experienced person\"@en .\n\
<http://www.dispedia.de/o/SpecialProposalDescription> <http://www.w3.org/2000/01/rdf-schema#comment> \"Diese Informationen sind manuell f\u00FCr bestimmte Patienten anzuzeigen.\"@de .\n\
<http://www.dispedia.de/o/SpecialProposalDescription> <http://www.w3.org/2000/01/rdf-schema#comment> \"This information is for special patients.\"@en .\n\
<http://www.dispedia.de/o/SpecialProposalDescription> <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://www.dispedia.de/o/ProposalDescription> .\n\
<http://www.dispedia.de/o/Patient> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#Class> .\n\
<http://www.dispedia.de/o/Patient> <http://www.w3.org/2000/01/rdf-schema#label> \"Patient\"@de .\n\
<http://www.dispedia.de/o/Patient> <http://www.w3.org/2000/01/rdf-schema#label> \"Patient\"@en .\n\
<http://www.dispedia.de/o/Patient> <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://www.dispedia.de/o/Person> .\n\
<http://www.dispedia.de/o/ExperiencedPatient> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#Class> .\n\
<http://www.dispedia.de/o/ExperiencedPatient> <http://www.w3.org/2000/01/rdf-schema#label> \"erfahrener Patient\"@de .\n\
<http://www.dispedia.de/o/ExperiencedPatient> <http://www.w3.org/2000/01/rdf-schema#label> \"experienced Patient\"@en .\n\
<http://www.dispedia.de/o/ExperiencedPatient> <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://www.dispedia.de/o/Patient> .\n\
<http://www.dispedia.de/o/SensitivePatient> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#Class> .\n\
<http://www.dispedia.de/o/SensitivePatient> <http://www.w3.org/2000/01/rdf-schema#label> \"sensibler Patient\"@de .\n\
<http://www.dispedia.de/o/SensitivePatient> <http://www.w3.org/2000/01/rdf-schema#label> \"sensitive Patient\"@en .\n\
<http://www.dispedia.de/o/SensitivePatient> <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://www.dispedia.de/o/Patient> .\n\
<http://www.dispedia.de/o/Person> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#Class> .\n\
<http://www.dispedia.de/o/Person> <http://www.w3.org/2000/01/rdf-schema#label> \"Person\"@de .\n\
<http://www.dispedia.de/o/Person> <http://www.w3.org/2000/01/rdf-schema#label> \"Person\"@en .\n\
<http://www.dispedia.de/o/Person> <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://xmlns.com/foaf/0.1/Person> .\n\
<http://www.dispedia.de/o/Person> <http://www.w3.org/2000/01/rdf-schema#subClassOf> <http://schema.org/Person> .\n\
<http://www.dispedia.de/o/PropertySet> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#Class> .\n\
<http://www.dispedia.de/o/PropertySet> <http://www.w3.org/2000/01/rdf-schema#label> \"Eigenschaftsmenge\"@de .\n\
<http://www.dispedia.de/o/PropertySet> <http://www.w3.org/2000/01/rdf-schema#label> \"Property set\"@en .\n\
<http://www.dispedia.de/o/Proposal> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#Class> .\n\
<http://www.dispedia.de/o/Proposal> <http://www.w3.org/2000/01/rdf-schema#label> \"Vorschlag\"@de .\n\
<http://www.dispedia.de/o/Proposal> <http://www.w3.org/2000/01/rdf-schema#label> \"Proposal\"@en .\n\
<http://www.dispedia.de/o/SymptomSet> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#Class> .\n\
<http://www.dispedia.de/o/SymptomSet> <http://www.w3.org/2000/01/rdf-schema#label> \"Symptommenge\"@de .\n\
<http://www.dispedia.de/o/SymptomSet> <http://www.w3.org/2000/01/rdf-schema#label> \"Symptom set\"@en .\n\
<http://www.dispedia.de/o/DrugInteraction> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#Class> .\n\
<http://www.dispedia.de/o/DrugInteraction> <http://www.w3.org/2000/01/rdf-schema#label> \"Interaktion\"@de .\n\
<http://www.dispedia.de/o/DrugInteraction> <http://www.w3.org/2000/01/rdf-schema#label> \"Interaction\"@en .\n\
<http://www.dispedia.de/o/DrugInteraction> <http://www.w3.org/2000/01/rdf-schema#comment> \"Eine Interaktion zwischen zwei Arzneimittel-Wirkstoffen. Die beteiligten Wirkstoffe k\u00F6nnen innerhalb der selben Vorschlagskomponente, innerhalb des selben Vorschlags oder zwischen einem Arzneimittel-Produkt und einem Vorschlag vorkommen. \"@de .\n\
<http://www.dispedia.de/o/DrugInteraction> <http://www.w3.org/2000/01/rdf-schema#comment> \"An interaction between two active ingredients of a drug. The affected ingredients may occur within a proposal component, within a proposal or between a drug product and a proposal.\"@en .\n\
<http://www.dispedia.de/o/Assessment> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#Class> .\n\
<http://www.dispedia.de/o/Assessment> <http://www.w3.org/2000/01/rdf-schema#label> \"Bewertung\"@de .\n\
<http://www.dispedia.de/o/Assessment> <http://www.w3.org/2000/01/rdf-schema#label> \"Assessment\"@en .\n\
<http://www.dispedia.de/o/Assessment> <http://www.w3.org/2000/01/rdf-schema#comment> \"Eine Bewertung eines Produktes oder Services.\"@de .\n\
<http://www.dispedia.de/o/Assessment> <http://www.w3.org/2000/01/rdf-schema#comment> \"An assessment of a product or service.\"@en .\n\
';
