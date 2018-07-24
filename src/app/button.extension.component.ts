import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-buttons-extension',
    templateUrl: 'buttons-extension.component.html'
})
export class ButtonsExtensionComponent implements OnInit {
    // Must be declared as "any", not as "DataTables.Settings"
    dtOptions: any = {};

    ngOnInit(): void {
        this.dtOptions = {
            ajax: 'data/data.json',
            columns: [{
                title: 'ID',
                data: 'id'
            }, {
                title: 'Nome Cliente',
                data: 'nome'
            }, {
                title: 'Fatturato',
                data: 'score'
            }, {
                title: 'Indirizzo',
                data: 'indirizzo'
            }, {
                title: 'Data Inizio',
                data: 'data'
            }],
            // Declare the use of the extension in the dom parameter
            dom: 'Bfrtip',
            // Configure the buttons
            buttons: [
                'columnsToggle',
                'colvis',
                'copy',
                'print',
                'excel',
                {
                    text: 'Some button',
                    key: '1',
                    action: function (e, dt, node, config) {
                        alert('Button activated');
                    }
                }
            ]
        };
    }
}