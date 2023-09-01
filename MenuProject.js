class Record {
    constructor(type, location) {
        this.type = type;
        this.location = location; 
    }

    describe() {
        return `${this.type} was completed at ${this.location}.`;
    }

}

class Patient {
    constructor(name) {
        this.name = name;
        this.records = [];
    }

    addRecord(record) {
        if (record instanceof Record) {
            this.records.push(record);
        } else {
            throw new Error(`You can only add records. Argument is not a defined record: ${record}`); 
        }
    }
    describe() {
        return `${this.name} has ${this.records.length} records.`; 
    }
}

class Menu {
    constructor() {
        this.records = []
        this.selectedRecord = null; 

    }

    start() {
        let selection = this.showMainMenuOptions();

        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createPatient();
                    break;
                case '2':
                    this.viewPatient();
                    break;
                case '3':
                    this.deletePatient();
                    break;
                case '4':
                    this.displayPatients();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions()
        }

        alert('Thank you for using this healthcare system!');
    }

    showMainMenuOptions() {
        return prompt(`
        0) exit
        1) Create New Patient
        2) View Patient
        3) Delete Patient
        4) Display all Patients
        `); 
    }

    showPatientMenuOptions(patientInfo) {
        return prompt(`
        0) back
        1) Create Record
        2) Delete Record
        ---------------------------------
        ${patientInfo}
        `);
    }

    displayPatients() {
        let patientString = ''; 
        for (let i = 0; i < this.records.length; i++) {
            patientString += i + ') ' + this.records[i].name + '\n'; 
        }
        alert(patientString);
    }

    createPatient() {
        let name = prompt(`Enter name for new Patient`);
        this.records.push(new Patient(name)); 
    }

    viewPatient() {
        let index = prompt(`Enter the index of the Patient you wish to view:`);
        if (index > -1 && index < this.records.length) {
            this.selectedRecord = this.records[index]; 
            let description = `Patient Name: ` + this.selectedRecord.name + `\n`;

            for (let i = 0; i < this.selectedRecord.records.length; i++) {
                description += i + ') ' + this.selectedRecord.records[i].name 
                + ' - ' + this.selectedRecord.records[i].date + '\n';
            }

            let selection = this.showPatientMenuOptions(description);
            switch (selection) {
                case '1': 
                    this.createRecord();
                    break;
                case '2':
                    this.deleteRecord();
            }
        }
    }
    deletePatient() {
        let index = prompt(`Enter the index of the Patient you wish to delete:`);
        if (index > -1 && index < this.records.length) {
            this.records.splice(index, 1);
        }
     }
    

    createRecord() {
        let type = prompt(`Enter type of medical record:`); 
        let location = prompt(`Enter location of medical procedure on record`);
        this.selectedRecord.records.push(new Record(type, location)); 
    }

    /*createRecord() {
        let type = prompt(`Enter type of medical record:`);
        let location = prompt(`Enter location of medical procedure on record:`);
        const newRecord = new Record(type, location);
        this.selectedRecord.records.push(newRecord);

    } */

    deleteRecord() {
        let index = prompt(`Enter the index of the record you wish to delete:`);
        if (index > -1 && index < this.selectedPatient.records.length) {
            this.selectedPatient.records.splice(index, 1);
        }
    }


}

let menu = new Menu();
menu.start(); 