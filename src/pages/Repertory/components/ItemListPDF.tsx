import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';

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

type ItemListPDFProps = {
  itemsFiltered: AnswerItemType[]
};

export const ItemListPDF = ({ itemsFiltered }: ItemListPDFProps) => (
  <Document>
    <Page size='A4' style={styles.page}>
      <View style={styles.table}>
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
        {itemsFiltered.map((plant, index) => (
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
              <Text style={styles.cell}>{plant.family?.toUpperCase()}</Text>
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
