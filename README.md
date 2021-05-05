# ![LOGO](logo.png) sevDesk Receipt API OIH Connector

## Description

[![Generic badge](https://img.shields.io/badge/Status-NotTested!-lightgrey.svg)](https://shields.io/)

A generated OIH connector for the sevDesk Receipt API (version 2.0.0).

Generated from: https://my.sevdesk.de/api/v1<br/>
Generated at: 2021-04-22T22:48:31+02:00

## API Description

# General information<br/>

## Authorization

Supported authorization schemes:

- API Key

## Actions

### Create a new voucher

> Creates a voucher together with positions and discounts.<br/>

_Tags:_ `Voucher`

### Upload voucher file

> Upload a file which can be attached to a voucher afterwards.<br><br/> > <br/>
> The filename you receive in the response of this request, can be used in the request which creates a voucher.<br><br/> > <br/>
> For a detailed explanation of how to attach a file to a voucher,<br/> > <br/>
> visit <a href='https://5677.extern.sevdesk.dev/apiOverview/index.html#/doc-vouchers#document'>this</a> section of our API-Overview.<br/>

_Tags:_ `Voucher`

### Retrieve vouchers

> There are a multitude of parameter which can be used to filter. A few of them are attached but<br/> > <br/>
> for a complete list please check out <a href='https://5677.extern.sevdesk.dev/apiOverview/index.html#/doc-vouchers#filtering'>this</a> list<br/>

_Tags:_ `Voucher`

#### Input Parameters

- `status` - _optional_ - Status of the vouchers to retrieve.<br/>
  Possible values: 50, 100, 1000.
- `creditDebit` - _optional_ - Define if you only want credit or debit vouchers.<br/>
  Possible values: C, D.
- `descriptionLike` - _optional_ - Retrieve all vouchers with a description like this.<br/>
- `startDate` - _optional_ - Retrieve all vouchers with a date equal or higher<br/>
- `endDate` - _optional_ - Retrieve all vouchers with a date equal or lower<br/>
- `contact[id]` - _optional_ - Retrieve all vouchers with this contact. Must be provided with contact[objectName]<br/>
- `contact[objectName]` - _optional_ - Only required if contact[id] was provided. 'Contact' should be used as value.<br/>

### Create a new voucher

> You can still create vouchers by using this request, however, this endpoint does not allow the<br/> > <br/>
> simultaneous creation of voucher positions. It only creates the voucher object!<br><br/> > <br/>
> Please use the 'saveVoucher' endpoint for creating vouchers together with positions, discounts, etc., in one request.<br><br/> > <br/>
> Support for users integrating with this endpoint may be limited.<br/>

_Tags:_ `Voucher`

### Find voucher by ID

> Returns a single voucher<br/>

_Tags:_ `Voucher`

#### Input Parameters

- `voucherId` - _required_ - ID of voucher to return<br/>

### Update an existing voucher

> Update a voucher<br/>

_Tags:_ `Voucher`

#### Input Parameters

- `voucherId` - _required_ - ID of voucher to update<br/>

### Book a voucher

> This endpoint can be used to book vouchers.<br><br/> > <br/>
> Vouchers are booked on payment accounts where (bank) transactions are located and might be linked to the transactions<br/> > <br/>
> by using this endpoint.<br><br/> > <br/>
> For more detailed information about booking vouchers, please refer to<br/> > <br/>
> <a href='https://5677.extern.sevdesk.dev/apiOverview/index.html#/doc-vouchers#booking'>this</a> section of our API-Overview.<br><br/> > <br/>
> Be aware, that this endpoint is deprecated and the new endpoint 'bookAmount' should be used instead.<br/>

_Tags:_ `Voucher`

#### Input Parameters

- `voucherId` - _required_ - ID of voucher to book<br/>

### Book a voucher

> This endpoint can be used to book vouchers.<br><br/> > <br/>
> Vouchers are booked on payment accounts where (bank) transactions are located and might be linked to the transactions<br/> > <br/>
> by using this endpoint.<br><br/> > <br/>
> For more detailed information about booking vouchers, please refer to<br/> > <br/>
> <a href='https://5677.extern.sevdesk.dev/apiOverview/index.html#/doc-vouchers#booking'>this</a> section of our API-Overview.<br/>

_Tags:_ `Voucher`

#### Input Parameters

- `voucherId` - _required_ - ID of voucher to book<br/>

### Retrieve voucher positions

> Retrieve all voucher positions depending on the filters defined in the query.<br/>

_Tags:_ `VoucherPos`

#### Input Parameters

- `voucher[id]` - _optional_ - Retrieve all vouchers positions belonging to this voucher. Must be provided with voucher[objectName]<br/>
- `voucher[objectName]` - _optional_ - Only required if voucher[id] was provided. 'Voucher' should be used as value.<br/>

## License

: sevDeskVoucher-Component<br/>
<br/>

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
