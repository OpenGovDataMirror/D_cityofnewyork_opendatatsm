---
published: true
layout: default
previous: citypolicies.html
next: cityguidelines.html
edit: "http://prose.io/#CityOfNewYork/opendatatsm/edit/gh-pages/citystandards.markdown"
---

#City Standards

##Integration Architecture

Delivery of data from back-end systems to the NYC OpenData portal will take place though an architecture which permits de-coupling and enables a layer of abstraction. This architecture leverages infrastructural investments and technical capabilities that either already exist within Agencies or would require minimal effort to implement.

A de-coupled architecture provides the following benefits:
- It supports effective data governance including the ability to avoid the public release of information not otherwise defined as public data, including personally identifiable information.
- It supports the ability to monitor update cycles and identify issues for rapid resolution.
- It permits the use of centralized services to help in data transformation, such as the conversion of geographic coordinates from the internally-used NY State Plane (FIPS Zone 3104) projection to the widely-Internet-used Web Mercator (WGS 84/EPSG:3857) projection.
- It permits the City to migrate to a different NYC OpenData portal solution without requiring significant re-engineering at every data source.
The diagram below represents a logical architecture for the integration capabilities.
 
Figure 1 – Logical Integration Architecture
![NYC Open Data Logical Architecture 20120313.png](img/NYC%20Open%20Data%20Logical%20Architecture%2020120313.png)

**ETL**: Extract-Transform-Load – a process by which data is extracted from a source system, manipulated as required by business rules, and then loaded into another system.

**OLAP**: Online Analytical Processing data storage – typically used for reporting and data mining capabilities. Data sets are typically de-normalized, and information therein may be routinely extracted from OLTP systems.

**OLTP**: Online Transactional Processing data storage – typically used for data entry and retrieval. Data sets are typically highly normalized, and information therein may be routinely extracted, transformed, and loaded into OLAP systems.

##Data Sets

###Data Content

####Data Types

Data sets may contain the following data types:
- Numbers, money, and percentages;
- Dates/times (ISO-8601 preferred);
- Booleans;
- E-mail addresses;
- URLs; and
- Location columns.

Please refer to the NYC OpenData portal’s [import specifications](http://dev.socrata.com/publisher/import-data-types) for details on formatting and parsing of the above data types.

####Format and Code Elements

Data values must not contain elements or markup used for presentation, nor should they contain interpreted or raw application source code. For example, HTML formatting tags such as &lt;script&gt;, &lt;table&gt;, &lt;tr&gt;, &lt;td&gt;, or &lt;br&gt; are not permitted.

####Geospatial Data

Geospatial data must be published in the Web Mercator coordinate system (WGS 84/EPSG:3857) to make the data easy to use with popular online mapping services. Although this is the most useful coordinate system for web-based mapping, Web Mercator as a geographic coordinate system is not a projection, and therefore the measurement of distance and area on such data will not be as accurate as a projected coordinate system.

Agencies may also make their data available in the New York State Plane, Long Island Zone, coordinate system (FIPS Zone 3104/EPSG:2263). If the data is hosted directly through the OpenData platform, it will be automatically converted to Web Mercator.

####Geocoding

Data sets providing information on location in tabular format can be automatically geocoded by the OpenData platform. 
- Address – single column that includes the building number, street name, city, state and zip code.
- Intersection – single column with the cross streets concatenated by an ampersand (&) or two separate columns (e.g., cross street 1 and cross street 2).

###Metadata

####Data Set Metadata

For each data set published, the providing Agency must, at a minimum, provide values for all of the metadata elements as defined in the latest version of the DublinCore Metadata Element Set. In addition, the Agency must provide the metadata element” frequency” which must correspond to a value contained in the DublinCore Collection Description Frequency Vocabulary.
The following table represents a list of required metadata elements for data sets as of the publication of this technical standard:

<table>
	<caption>Required Metadata Elements</caption>
    <thead>
		<tr><th>Label</th><th>Description</th><th>Permitted Values (if applicable)</th></tr>
    </thead>
    <tbody>
		<tr><td>Contributor</td><td>Indicates the agency that supplied the data.</td><td></td></tr>
		<tr><td>Coverage</td><td>Indicates the range of data from either a temporal or spatial perspective.</td><td></td></tr>
		<tr><td>Creator</td><td>Indicates the agency that supplied the data.</td><td></td></tr>
		<tr><td>Date</td><td>Auto-generated by Socrata when data set (or metadata) is modified.</td><td></td></tr>
		<tr><td>Description</td><td>A brief description of the data set.</td><td></td></tr>
		<tr><td>Format</td><td>Dependent upon export methodology. Refer to <a href="publicstandards.html" title="Public Standards">Public Standards</a> for more information.</td><td></td></tr>
		<tr><td>Frequency</td><td>Indicates the rate at which the information in the data set is updated.</td><td><pre>Not updated [historical only]<br />Annual<br />Quarterly<br />Bi-monthly<br />Monthly<br />Bi-weekly<br />Weekly<br />Daily<br />Hourly<br />Continuous</pre></td></tr>
		<tr><td>Identifier</td><td>Socrata uses a 9-digit identifier (usually xxxx-xxxx); may have the option for better permalinking under the "resource name" field.</td><td></td></tr>
		<tr><td>Language</td><td>Language of the data set. Assumed to be en-US for all data sets. Exceptions must be noted.</td><td><pre>en-US</pre></td></tr>
		<tr><td>Publisher</td><td>Entity that is responsible for publishing the data; this will always be the City of New York.</td><td><pre>City of New York</pre></td></tr>
		<tr><td>Relation</td><td>Not used.</td><td></td></tr>
		<tr><td>Rights</td><td>NYC data sets should be attributed to the City. Refer to <a href="publicpolicies.html" title="Public Policies">Public Policies</a>.</td><td></td></tr>
		<tr><td>Source</td><td>Identifies the name of the source system within the City.</td><td></td></tr>
        <tr><td>Subject</td><td>Comma-separated list of nouns describing the content of the data set.</td><td></td></tr>
		<tr><td>Title</td><td>The brief descriptive name of the data set.</td><td></td></tr>
		<tr><td>Type</td><td>The category of the data set identified by the list of possible values. If a data set can fall into multiple categories, select the one which is most significant. This list will be subject to change on an ongoing basis.</td><td><pre>Business and Economic<br />Community Service<br />Construction and Housing<br />Cultural Affairs<br />Education<br />Environmental Sustainability<br />Events<br />Facilities and Structures<br />Finances<br />Government<br />Health<br />Library<br />Media<br />Organizations<br />Other<br />Property<br />Public Safety<br />Social Services<br />Statistics<br />Transportation<br />Women's Issues</pre></td></tr>
	</tbody>
</table>

####Column Metadata

Although metadata for columns within a data set is not required, it should be provided when the column identifiers do not provide a user with enough information to use it effectively. For example, the metadata for a column containing restaurant inspection letter grades should indicate the possible values and their meanings.

####Standards for Data Citation

An Agency should include any preferred citation for a data set in the data set’s metadata or supporting documentation.

##Data Set Publishing

The Agency ODC should work closely with DoITT during the initial data set publishing process to identify the best technical approach to automate delivery to the public. The following mechanisms are supported:

###Database Management System (DBMS) Access

For Agencies that require DoITT assistance to extract data from back-office systems, the Agency must provide read-only DBMS credentials for the necessary databases, tables, stored procedures, and/or views. The credentials should not permit access to tables, columns, or other entities that contain information that is not included within the definition of public data set because it is exempt from disclosure.
If the Agency operates a data warehouse, it should provide access to extract public data sets from the warehouse rather than the source operational system.

###File Transfers

Agencies may choose to publish files to a location on the City intranet that DoITT staff or DoITT-managed automation tools can access. Specific details, such as location, formats, naming conventions, and sizing, should be discussed with DoITT.

###Enterprise Service Bus

Agencies may leverage DoITT’s Enterprise Service Bus (DataShare) to publish public data sets. This option may be especially desirable if DataShare already automatically transfers the data set. 

###Self-Hosting

In any exceptional case in which transaction volumes, data structure, technical barriers, or resource limits prevent hosting a public data set on the NYC Open Data portal itself, the NYC OpenData portal must provide a direct link to the public data set that is hosted elsewhere so that the data set is accessible to the public through the NYC OpenData portal. In such an exceptional case, an Agency may self-host the relevant public data set, provided that the public data set is accessible to the public through the link on the NYC OpenData portal according to following standards: 
- The agency must provide a single, unique, publicly accessible URL for each data set along with the data set-level metadata. This information will be made available in the NYC OpenData portal’s catalog of data sets. It is strongly preferred that the URL be the location of the data set, and not an intermediate web page.
- The data set must be machine-readable and in one of the formats listed in the Public Standards section of this document. The Portable Document Format (PDF) is not permitted.
- The data set may be encapsulated in a single archive file (and optionally compressed) if it consists of multiple related files.

##Maintenance

Data sets published on the NYC OpenData portal must be maintained for accuracy, timeliness, and accessibility, as set forth below.

###Data Set Content Updates

Agency ODCs are responsible for identifying an update frequency for each public data set as an element in its data set metadata, and for ensuring that their data set content updates are maintained and published according to the data set’s identified schedule or to the extent that the agency regularly maintains or updates the public data set.

###Structural Changes (Fields, Data Types)

The ODC or Agency liaison must not modify existing data structure during normal updates to the data set. The number of data elements per record, name, format, and order of the data elements must be consistent with the originally-published version. The Agency ODC should notify DoITT prior to any structural changes to data sets.

###Content Support

DoITT will contact the Agency ODC to obtain feedback or a direct answer to comments or inquiries from the public that relate to data set contents or supporting documentation. The Agency will provide DoITT with an expected timeframe to resolve the support inquiry as soon as possible. The Agency must then notify DoITT when the updates or corrections are ready for publication. 
An Agency that proactively identifies defects or improvements related to its data set content or supporting documentation must notify DoITT prior to publication of any changes.

##Ownership, Responsibility, and Retention

###Ownership 

Agencies retain ownership over the data sets that they submit. All data and data sets remain the property of the originating Agency and public users acquire no ownership rights to Agency data or data sets. 
The data sets published on NYC.gov or the NYC OpenData portal become a public resource available to anyone with access to the Internet. The public use of the data sets may include development of applications. In this case, the developers retain all intellectual property ownership in their applications, excluding the Agency data itself, whose ownership continues to reside with the Agency. 

###Responsibility 

The Agency that owns the data set is responsible for all aspects of the quality, integrity, and security of the data set contents, as detailed below, and as subject to limitations on liability contained in Local Law 11. Agencies do not relinquish control of their data to DoITT when the data set is submitted for publication on the NYC OpenData portal. 

Agencies are responsible for ensuring that all of their submitted data has been reviewed by appropriate Agency management for confidentiality, privacy, security, and all other content limitation issues consistent with Local Law 11 before the data is submitted for publication. The Agency supplying the data is also responsible for maintaining records of information privacy status and public-disclosure requirements.
The Agency is responsible for updating its data according to the frequency identified in the data set metadata or to the extent that the agency regularly maintains or updates the public data set.

###Retention 

As the authoritative source of the information, submitting Agencies retain version control of public data sets and must comply with record retention schedules and requirements outlined by the New York City Department of Records and Information Services. 

##Exemption from Public Access 

Public data to be made available per [Local Law 11 of 2012](LocalLaw11of2012.html) does not include any data set to which an Agency may deny access pursuant to the Freedom of Information Law (FOIL) or any other provision of a federal or state law, rule or regulation or local law.  (That notwithstanding, by itself, Local Law 11 does not prohibit Agencies from releasing such FOIL-deniable data.)
Records deniable under FOIL are those that:
(a)	are specifically exempted from disclosure by state or federal statute;
(b)	if disclosed would result in an unwarranted invasion of personal privacy; 
(c)	if disclosed would impair present or imminent contract awards or collective bargaining negotiations;
(d)	are trade secrets or are submitted to an agency by a commercial enterprise or derived from information obtained from a commercial enterprise and which if disclosed would cause substantial injury to the competitive position of the subject enterprise;
(e)	are compiled for law enforcement purposes and which if disclosed would:
i.	interfere with law enforcement investigations or judicial proceedings;
ii.	deprive a person of a right to a fair trial or impartial adjudication;
iii.	identify a confidential source or disclose confidential information relative to a criminal investigation; or
iv.	reveal criminal investigative techniques or procedures, except routine techniques and procedures;
(f)	could if disclosed endanger the life or safety of any person;
(g)	are inter-agency or intra-agency communications, except to the extent that such materials consist of:
i.	statistical or factual tabulations or data;
ii.	instructions to staff that affect the public;
iii.	final agency policy or determinations; or
iv.	external audits, including but not limited to audits performed by the comptroller and the federal government;
(h)	are examination questions or answers that are requested prior to the final administration of such questions;
(i)	if disclosed, would jeopardize an agency’s capacity to guarantee the security of its information technology assets, such assets encompassing both electronic information systems and infrastructures;
(j)	are photographs, microphotographs, videotape or other recorded images prepared under authority of section eleven hundred eleven-a of the vehicle and traffic law (this exemption will be repealed effective December 1, 2014);
(k)	are photographs, microphotographs, videotape or other recorded images prepared under authority of section eleven hundred eleven-b of the vehicle and traffic law (this exemption will be repealed effective December 1, 2014); or
(l)	are photographs, microphotographs, videotape or other recorded images produced by a bus lane photo device prepared under authority of section eleven hundred eleven-c of the vehicle and traffic law (this exemption will be repealed effective September 20, 2015).
For subparagraphs (j) through (l) above, such information must be included on the date such subparagraphs will be repealed.

Local Law 11 specifies the following additional exemptions:
- any portion of such data set to which an agency may deny access pursuant to the public officers law or any other provision of a federal or state law, rule or regulation or local law;
- any data set that contains a significant amount of data to which an agency may deny access pursuant to the public officers law or any other provision of a federal or state law, rule or regulation or local law and where removing such data would impose undue financial or administrative burden;
- data that reflects the internal deliberative process of an agency or agencies, including but not limited to negotiating positions, future procurements, or pending or reasonably anticipated legal or administrative proceedings;
- data stored on an agency-owned personal computing device, or data stored on a portion of a network that has been exclusively assigned to a single agency employee or a single agency owned or controlled computing device;
- materials subject to copyright, patent, trademark, confidentiality agreements or trade secret protection;
- proprietary applications, computer code, software, operating systems or similar materials; or
-employment records, internal employee-related directories or lists, and facilities data, information technology, internal service-desk and other data related to internal agency administration.

Nothing in the legislation, policies, or standards shall be deemed to prohibit an Agency from voluntarily disclosing information not otherwise defined as a public data set, nor shall it be deemed to prohibit an agency from making such voluntarily disclosed information accessible through the NYC OpenData portal.
