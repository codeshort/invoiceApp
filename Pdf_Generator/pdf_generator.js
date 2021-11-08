const PDFGenerator = require('pdfkit')
const fs = require('fs')
  var max = 0;
class InvoiceGenerator {
    constructor(invoice)
    {
        this.invoice = invoice
    }

    generateHeaders(doc) {
        const billingAddress = this.invoice.address;
        doc
            .image('./Pdf_Generator/door-company-logo.jpg', 0, 0, { width: 250})
            .fontSize(20)
            .fillColor('red')
            .text('INVOICE', 275, 50, {align: 'right'})
            .fillColor('#000')
            .text(`Invoice Number: ${this.invoice.invoiceId}`, {align: 'right'})
            .text(`Due: ${this.invoice.dueDate}`, {align: 'right'})
            .moveDown()
            .text(`Billing Address:\n ${billingAddress}`, {align: 'right'})


        
        const beginningOfPage = 50
        const endOfPage = 550

        doc.moveTo(beginningOfPage,200)
            .lineTo(endOfPage,200)
            .stroke()
            
        doc
           .fontSize(20)
           .fillColor('#1D3E3A')
           .text(`Labours:                   ${this.invoice.labours}`, 50, 210)
           .text(`Hours:                      ${this.invoice.hours}`, 50, 250)
           .text(`Charge/hr:              $ ${this.invoice.charges}`, 50, 230)
           .text(`Total:                      $ ${this.invoice.labourCharge}`, 50, 270)
           .text(`Delivery Charge:    $ ${this.invoice.deliveryCharge}`, 50, 290)
           .text(`taxes:                     $ ${this.invoice.taxes}`, 50, 310)


        doc.moveTo(beginningOfPage,330)
            .lineTo(endOfPage,330)
            .stroke()
    }
    
    generateTable(doc) {
        const tableTop = 350
        const itemCodeX = 50
        const descriptionX = 50
        const quantityX = 200
        const priceX = 300
        const amountX = 450

        doc
            .fontSize(20)
            .fillColor('#008080')
            .text('Description', descriptionX, tableTop)
            .text('Quantity', quantityX, tableTop)
            .text('Price/quantity', priceX, tableTop)
            .text('Amount', amountX, tableTop)

        const items = this.invoice.items
        let i = 0


        for (i = 0; i < items.length; i++) {
            const item = items[i]
            const y = tableTop + 25 + (i * 25);
            if(max<y) max = y;
            doc
                .fontSize(20)
                .fillColor('#1D3E3A')
                .text(item.description, descriptionX, y)
                .text(item.quantity, quantityX, y)
                .text(`$ ${item.price}`, priceX, y)
                .text(`$ ${item.total}`, amountX, y)
        }
    }

    generateFooter(doc) {
        doc
            .fontSize(20)
            .fillColor('#900C3F')
            .text(`Total Payment Due: $ ${this.invoice.total}`,10, max+50, {align: 'center'})
            .text(`Invoice status: ${this.invoice.status}`,10, max+80, {align: 'center'})
    }

    generate()
     {
        let theOutput = new PDFGenerator
        console.log(this.invoice)

        const fileName = `Invoice${this.invoice.invoiceId}.pdf`
        theOutput.pipe(fs.createWriteStream(fileName))

        this.generateHeaders(theOutput)
        theOutput.moveDown()
        this.generateTable(theOutput)
        this.generateFooter(theOutput)

        theOutput.end()

    }
}
module.exports = InvoiceGenerator;
