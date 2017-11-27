# Schema
Communication
  Id
  Subject
  CommunicationBoxId
  Body
    RichText
  Comments
    RichText
  CreatedBy
  CreatedAt
  UpdatedBy
  UpdatedAt
  Status
    Draft
    SendingXXX
    SentXXX

CommunicationMails
  Id
  CommunicationId
  XfieldId: Guid
  Name
  Email
  Status
    Draft
    Sending
    SentSuccess
    SentFailure
    DeliverySuccess
    DelivieryFailure
    AutomaticResponse
    Read
  SentAt
  DeliveredAt
  AutomaticResponseAt
  ReadAt
  CreatedAt
  IsEvidencedDownloaded

CommunicationAttachments
  Id
  CommunicationId
  Name
  File

CommunicationBox 
  Id
  Name
  Role
  From 

TimeCertifications
  Id
  Date
  File

# Notas
Los Evids se bajarán a una carpeta del tipo <Año>/Communications/<CommunicationID>/Evidences/<XField>.pdf
Los Adjuntos se bajarán a una carpeta del tipo <Año>/Communications/<CommunicationID>/Attachments/<File>.pdf
Los certificados de tiempo se guardaran en <Año>/TimeCertifications/<File>.pdf

# API
/communications
  get:
  put:

/communications/{id}
  get: 
  post:
  delete:

/daemon <Pending name> 

# Teams
Frontoffice
  Jordi
  Santi
  Jose

Backoffice
  David
  Alex
  Jabi








