var CsvParser = require('../csv-parser');


describe('csv-parser', function () {
    it('should parse the csv into an json object', function () {

        var config = {"csvFieldSeparator": ","};
        var stringUnderTest = "id,en,de\n" +
            "Homepage.Edit,Edit,Bearbeiten\n" +
            "Homepage.Save,Save,Speichern\n";
        var expected = {
            en: {Homepage: {Edit: 'Edit', Save: 'Save'}},
            de: {Homepage: {Edit: 'Bearbeiten', Save: 'Speichern'}}
        };

        var processedCsv = CsvParser.processCsv(stringUnderTest, config);

        expect(processedCsv).not.toEqual(null);
        expect(processedCsv).toEqual(expected);
    });
});