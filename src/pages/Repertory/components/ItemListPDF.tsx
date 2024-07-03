import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  table: {
    display: "flex",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    flexDirection: "row",
  },
  column: {
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  columnNumber: {
    width: "10%",
  },
  columnCommonName: {
    width: "30%",
  },
  columnScientificName: {
    width: "40%",
  },
  columnFamily: {
    width: "20%",
  },

  tableCell: {
    margin: 5,
    fontSize: 12,
  },
});

const PLANTS = [
  {
    id: 1,
    commonName: 'Aji ornamental',
    scientificName: 'Capsicum annuum L',
    family: 'Asparagaceae',
  }
];

export const ItemListPDF = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.table}>
          {/* Table Header */}
          <View style={styles.tableRow}>
            <View style={[styles.column, styles.columnNumber]}>
              <Text style={styles.tableCell}>N°</Text>
            </View>
            <View style={[styles.column, styles.columnCommonName]}>
              <Text style={styles.tableCell}>Nombre Com&oacute;n</Text>
            </View>
            <View style={[styles.column, styles.columnScientificName]}>
              <Text style={styles.tableCell}>Nombre Cientifico</Text>
            </View>
            <View style={[styles.column, styles.columnFamily]}>
              <Text style={styles.tableCell}>Familia</Text>
            </View>
          </View>
          {/* Table Rows */}
          {PLANTS.map(plant => (
            <View style={styles.tableRow}>
              <View style={[styles.column, styles.columnNumber]}>
                <Text style={styles.tableCell}>{plant.id}</Text>
              </View>
              <View style={[styles.column, styles.columnCommonName]}>
                <Text style={styles.tableCell}>{plant.commonName}</Text>
              </View>
              <View style={[styles.column, styles.columnScientificName]}>
                <Text style={styles.tableCell}>{plant.scientificName}</Text>
              </View>
              <View style={[styles.column, styles.columnFamily]}>
                <Text style={styles.tableCell}>{plant.family}</Text>
              </View>
            </View>
          ))}
          {/* Add more rows as needed */}
        </View>
      </Page>
    </Document>
  );
}
