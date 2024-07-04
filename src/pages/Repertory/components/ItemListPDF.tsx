import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';

Font.register({
  family: 'ABeeZee',
  src: 'http://fonts.gstatic.com/s/abeezee/v9/JYPhMn-3Xw-JGuyB-fEdNA.ttf',
});

const styles = StyleSheet.create({
  page: {
    padding: 40,
    paddingBottom: 60,
  },

  row: {
    flexDirection: 'row',
  },

  headerCell: {
    textAlign: 'center',
    margin: 5,
    fontSize: 11,
    fontFamily: 'Courier-Oblique',
  },

  cell: {
    marginVertical: 4,
    marginHorizontal: 6,
    fontSize: 9,
  },

  table: {
    display: 'flex',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },

  column: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
  },

  columnNumber: {
    width: '7%',
    textAlign: 'center',
  },

  columnCommonName: {
    width: '34%',
  },

  columnScientificName: {
    width: '34%',
    fontStyle: 'italic'
  },

  columnFamily: {
    width: '25%',
  },

  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});

const PLANTS = [
  {
    id: 1,
    commonName: 'Aji ornamental',
    scientificName: 'Capsicum annuum L',
    family: 'Asparagaceae',
  },
  {
    id: 2,
    commonName: 'Aji ornamental',
    scientificName: 'Capsicum annuum L',
    family: 'Asparagaceae',
  },
  {
    id: 3,
    commonName: 'Aji ornamental',
    scientificName: 'Capsicum annuum L',
    family: 'Asparagaceae',
  },
  {
    id: 4,
    commonName: 'Aji ornamental',
    scientificName: 'Capsicum annuum L',
    family: 'Asparagaceae',
  },
  {
    id: 5,
    commonName: 'Aji ornamental',
    scientificName: 'Capsicum annuum L',
    family: 'Asparagaceae',
  },
  {
    id: 5,
    commonName: 'Aji ornamental',
    scientificName: 'Capsicum annuum L',
    family: 'Asparagaceae',
  },
  {
    id: 7,
    commonName: 'Aji ornamental',
    scientificName: 'Capsicum annuum L',
    family: 'Asparagaceae',
  },
  {
    id: 8,
    commonName: 'Aji ornamental',
    scientificName: 'Capsicum annuum L',
    family: 'Asparagaceae',
  },
  {
    id: 8,
    commonName: 'Aji ornamental',
    scientificName: 'Capsicum annuum L',
    family: 'Asparagaceae',
  },
  {
    id: 10,
    commonName: 'Aji ornamental',
    scientificName: 'Capsicum annuum L',
    family: 'Asparagaceae',
  },
  {
    id: 11,
    commonName: 'Aji ornamental',
    scientificName: 'Capsicum annuum L',
    family: 'Asparagaceae',
  },
  {
    id: 12,
    commonName: 'Aji ornamental',
    scientificName: 'Capsicum annuum L',
    family: 'Asparagaceae',
  },
  {
    id: 13,
    commonName: 'Aji ornamental',
    scientificName: 'Capsicum annuum L',
    family: 'Asparagaceae',
  },
  {
    id: 15,
    commonName: 'Aji ornamental',
    scientificName: 'Capsicum annuum L',
    family: 'Asparagaceae',
  },
  {
    id: 16,
    commonName: 'Aji ornamental',
    scientificName: 'Capsicum annuum L',
    family: 'Asparagaceae',
  },
  {
    id: 17,
    commonName: 'Aji ornamental',
    scientificName: 'Capsicum annuum L',
    family: 'Asparagaceae',
  },
  {
    id: 18,
    commonName: 'Aji ornamental',
    scientificName: 'Capsicum annuum L',
    family: 'Asparagaceae',
  },
  {
    id: 19,
    commonName: 'Aji ornamental',
    scientificName: 'Capsicum annuum L',
    family: 'Asparagaceae',
  },
  {
    id: 20,
    commonName: 'Aji ornamental',
    scientificName: 'Capsicum annuum L',
    family: 'Asparagaceae',
  },
  {
    id: 31,
    commonName: 'Aji ornamental',
    scientificName: 'Capsicum annuum L',
    family: 'Asparagaceae',
  },
  {
    id: 22,
    commonName: 'Aji ornamental',
    scientificName: 'Capsicum annuum L',
    family: 'Asparagaceae',
  },
  {
    id: 23,
    commonName: 'Aji ornamental',
    scientificName: 'Capsicum annuum L',
    family: 'Asparagaceae',
  },
  {
    id: 24,
    commonName: 'Aji ornamental',
    scientificName: 'Capsicum annuum L',
    family: 'Asparagaceae',
  },
  {
    id: 25,
    commonName: 'Aji ornamental',
    scientificName: 'Capsicum annuum L',
    family: 'Asparagaceae',
  },
  {
    id: 26,
    commonName: 'Aji ornamental',
    scientificName: 'Capsicum annuum L',
    family: 'Asparagaceae',
  },
  {
    id: 8,
    commonName: 'Aji ornamental',
    scientificName: 'Capsicum annuum L',
    family: 'Asparagaceae',
  },
  {
    id: 10,
    commonName: 'Aji ornamental',
    scientificName: 'Capsicum annuum L',
    family: 'Asparagaceae',
  },
  {
    id: 11,
    commonName: 'Aji ornamental',
    scientificName: 'Capsicum annuum L',
    family: 'Asparagaceae',
  },
  {
    id: 12,
    commonName: 'Aji ornamental',
    scientificName: 'Capsicum annuum L',
    family: 'Asparagaceae',
  },
  {
    id: 13,
    commonName: 'Aji ornamental',
    scientificName: 'Capsicum annuum L',
    family: 'Asparagaceae',
  },
  {
    id: 15,
    commonName: 'Aji ornamental',
    scientificName: 'Capsicum annuum L',
    family: 'Asparagaceae',
  },
  {
    id: 16,
    commonName: 'Aji ornamental',
    scientificName: 'Capsicum annuum L',
    family: 'Asparagaceae',
  },
  {
    id: 17,
    commonName: 'Aji ornamental',
    scientificName: 'Capsicum annuum L',
    family: 'Asparagaceae',
  },
  {
    id: 18,
    commonName: 'Aji ornamental',
    scientificName: 'Capsicum annuum L',
    family: 'Asparagaceae',
  },
  {
    id: 19,
    commonName: 'Aji ornamental',
    scientificName: 'Capsicum annuum L',
    family: 'Asparagaceae',
  },
  {
    id: 20,
    commonName: 'Aji ornamental',
    scientificName: 'Capsicum annuum L',
    family: 'Asparagaceae',
  },
  {
    id: 31,
    commonName: 'Aji ornamental',
    scientificName: 'Capsicum annuum L',
    family: 'Asparagaceae',
  },
  {
    id: 22,
    commonName: 'Aji ornamental',
    scientificName: 'Capsicum annuum L',
    family: 'Asparagaceae',
  },
  {
    id: 23,
    commonName: 'Aji ornamental',
    scientificName: 'Capsicum annuum L',
    family: 'Asparagaceae',
  },
  {
    id: 24,
    commonName: 'Aji ornamental',
    scientificName: 'Capsicum annuum L',
    family: 'Asparagaceae',
  },
  {
    id: 25,
    commonName: 'Aji ornamental',
    scientificName: 'Capsicum annuum L',
    family: 'Asparagaceae',
  },
  {
    id: 26,
    commonName: 'Aji ornamental',
    scientificName: 'Capsicum annuum L',
    family: 'Asparagaceae',
  },
];

export const ItemListPDF = () => {
  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <View style={styles.table}>
          {/* Table Header */}
          <View style={styles.row}>
            <View style={[styles.column, styles.columnNumber]}>
              <Text style={styles.headerCell}>N°</Text>
            </View>
            <View style={[styles.column, styles.columnCommonName]}>
              <Text style={styles.headerCell}>NOMBRE COM&Uacute;N</Text>
            </View>
            <View style={[styles.column, styles.columnScientificName]}>
              <Text style={styles.headerCell}>NOMBRE CIENTIFICO</Text>
            </View>
            <View style={[styles.column, styles.columnFamily]}>
              <Text style={styles.headerCell}>FAMILIA</Text>
            </View>
          </View>
          {/* Table Rows */}
          {PLANTS.map((plant, index) => (
            <View style={styles.row} key={index}>
              <View style={[styles.column, styles.columnNumber]}>
                <Text style={styles.cell}>{index}</Text>
              </View>
              <View style={[styles.column, styles.columnCommonName]}>
                <Text style={styles.cell}>{plant.commonName.toUpperCase()}</Text>
              </View>
              <View style={[styles.column, styles.columnScientificName]}>
                <Text style={styles.cell}>{plant.scientificName}</Text>
              </View>
              <View style={[styles.column, styles.columnFamily]}>
                <Text style={styles.cell}>{plant.family.toUpperCase()}</Text>
              </View>
            </View>
          ))}
        </View>
        <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
          `${pageNumber} / ${totalPages}`
        )} fixed />
      </Page>
    </Document>
  );
}
