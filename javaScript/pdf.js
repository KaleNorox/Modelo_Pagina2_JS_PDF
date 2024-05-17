function genPDF() {


    var f=new Date();
    var d=f.getDate();
    var m=f.getMonth();
    var y=f.getFullYear();
    var h=f.getHours();
    var mm=f.getMinutes();
    var amp='';

    if (mm<10){mm='0'+mm}
    if (m<10){m='0'+m}

    if(h>12){
        amp='pm'
    }else{
        amp='am'
    }


    var tiempo =`${d}/${m}/${y} ${h}:${mm} ${amp}`;



    var n = Math.floor(Math.random() * 900000) + 100000;

    const idprincipal = {
        ID: `${n}`,
        cliente: 'Kaled Steven Noronha León',
        contacto: 'Tecnoplus',
        ciudad: 'Lima',
        telefono: `(+${51}) ${940352822}`,
        direccion: {
            ciudad: 'lima',
            zip: 15103,
            lat: 25.4548,
            lng: 391.1425,
        },
        email: 'contacto@contacto',
        fecha: `${tiempo}`,
        pago: '  Visa '
    }

    const atributo1 = {
        id: 1,
        lugar: 'Audífono Gamer C/Microf Razer',
        cant: 1,
        p: 25.50,
        pv: 35.80,
        coste: 0,
        costx: 0,
        tt: 699.00,
    }

    const atributo2 = { ...atributo1 }
    atributo2.id = 2;
    atributo2.lugar = 'Laptop Asus VivoBook 14';
    atributo2.cant = 2;
    atributo2.p = 80.75;
    atributo2.pv = 40.6;
    atributo2.coste = 0.00;
    atributo2.costx = 0.00;
    atributo2.tt = 8298;

    const atributo3 = { ...atributo2 }
    atributo3.id = 3;
    atributo3.lugar = 'Cámara Web Logitech C920s';
    atributo3.cant = 3;
    atributo3.p = 10.65;
    atributo3.pv = 20.55;
    atributo3.coste = 0.00;
    atributo3.costx = 0.00;
    atributo3.tt = 1077;


    const atributov = {
        id: ' ',
        lugar: '',
        cant: '',
        p: '',
        pv: '',
        coste: '',
        costx: '',
        tt: '',
    }
    let imp = atributo1.tt + atributo2.tt + atributo3.tt;
    let igv = imp * 0.18;
    let ttl = imp + igv;

    const doc = new jsPDF();

    const pie = [
        [{ content: 'Observaciones:', styles: { cellWidth: 140, lineColor: [0, 0, 0], lineWidth: 0.1 } },
        { content: 'Importe', styles: { cellWidth: 22, halign: "center", lineColor: [0, 0, 0], lineWidth: 0.1 } },
        { content: imp.toFixed(2), styles: { fillColor: [192, 192, 192], halign: "center", cellWidth: 19.8, textColor: [0, 0, 0], theme: 'grid', lineColor: [0, 0, 0], lineWidth: 0.1 } }],

        [
            { content: '', styles: { cellWidth: 140, fillColor: [240, 248, 255] } },
            { content: 'IGV(18%)', styles: { cellWidth: 22, halign: "center", lineColor: [0, 0, 0], lineWidth: 0.1 } },
            { content: igv.toFixed(2), styles: { fillColor: [192, 192, 192], cellWidth: 19.8, lineColor: [0, 0, 0], lineWidth: 0.1, halign: "center", textColor: [0, 0, 0] } }

        ],
        [
            { content: '', styles: { cellWidth: 140, fillColor: [240, 248, 255] } },
            { content: 'TOTAL', styles: { cellWidth: 22, halign: "center", lineColor: [0, 0, 0], lineWidth: 0.1 } },
            { content: ttl.toFixed(2), styles: { cellWidth: 19.8, halign: "center", lineColor: [0, 0, 0], lineWidth: 0.1 } }
        ]
    ];


    var c = 1;
    c++;
    if (c < 10) c = "A-000" + c;
    if (c < 100) c = "A-00" + c;
    if (c < 1000) c = "A-0" + c;

    const contxt = [
        { content: '', styles: { cellWidth: 150, fillColor: [255, 255, 255] } },
        { content: 'N° Cotizacion', styles: { cellWidth: 30, lineColor: [0, 0, 0], lineWidth: 0.1 } }
    ];
    let conteo = [
        { content: '', styles: { cellWidth: 150, fillColor: [255, 255, 255] } },
        { content: c, style: { cellWidth: 30, lineColor: [0, 0, 0], lineWidth: 0.1 } }
    ];

    doc.autoTable({
        startY: 5,
        head: [contxt],
        body: [conteo],
    });
    
    doc.setTextColor(0, 102, 153);
    doc.setFont("Arial");
    doc.setFontSize(25);
    doc.text('TECNOPLUS S.A.C', 68, 20);
    doc.setFont("Arial");
    doc.setTextColor(0, 102, 153);
    doc.setFontSize(12);
    doc.text('Lo ultimo en tecnoligia a precios', 75, 30);
    doc.text('insuperables.', 90, 38);
    doc.autoTable({
        startY: 50,
        head: [['Ruc/DNI', 'Cliente', 'Contacto', 'Ciudad']],
        body: [[`${idprincipal.ID}`, `${idprincipal.cliente}`, `${idprincipal.contacto}`, `${idprincipal.ciudad}`]],
        styles:{
            halign:'center'
        }
    });

    doc.autoTable({
        startY: doc.autoTable.previous.finalY,
        head: [['Teléfono', 'Direccion', 'Email', 'Fecha', 'Forma de pago']],
        body: [[`${idprincipal.telefono}`, `${idprincipal.direccion.ciudad}`, `${idprincipal.email}`, `${idprincipal.fecha}`, `${idprincipal.pago}`]],
        styles:{
            halign:'center'
        }
    });

    doc.autoTable({
        startY: doc.autoTable.previous.finalY + 10,
        head: [['Item', 'Destino de entrega', 'Cant', 'Peso', 'Peso vol', 'Costo envio', 'Costo extra', 'Valor Total']],
        body: [
            [
                atributo1.id, atributo1.lugar, atributo1.cant, atributo1.p, atributo1.pv,
                `s/.${atributo1.coste}`, `s/.${atributo1.costx}`, `s/.${(atributo1.tt).toFixed(2)}`
            ],
            [
                atributo2.id, atributo2.lugar, atributo2.cant, atributo2.p, atributo2.pv,
                `s/.${atributo2.coste}`, `s/.${atributo2.costx}`, `s/.${(atributo2.tt).toFixed(2)}`
            ],
            [
                atributo3.id, atributo3.lugar, atributo3.cant, atributo3.p, atributo3.pv,
                `s/.${atributo3.coste}`, `s/.${atributo3.costx}`, `s/.${(atributo3.tt).toFixed(2)}`
            ],
            ...Array.from({ length: 5 }, () => [atributov.id, atributov.lugar, atributov.cant, atributov.p, atributov.pv, atributov.coste, atributov.costx, `s/.${(atributov.tt * 0.00).toFixed(2)}`])
        ],
        styles:{
            halign:'center'
        }
    });

    doc.autoTable({
        startY: doc.autoTable.previous.finalY,
        head: pie,

    });

    doc.save(`Reporte_${idprincipal.ID}`);
}