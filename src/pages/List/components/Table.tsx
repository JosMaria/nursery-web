import type { PlantSummaryResponse } from '../types';
import { Link } from 'react-router';

import { EyeOffIcon, PencilIcon, StarIcon } from '@/icons';
import styles from '@/pages/List/scss/Table.module.scss';

interface TableProps {
  plants: PlantSummaryResponse[];
}

const Table = ({ plants }: TableProps) => {
  return (
    <table className={styles.table}>
      <thead className={styles.tableHeader}>
        <tr>
          <th className={styles.tableHeaderCell}>N.</th>
          <th className={styles.tableHeaderCell}>Nombre Cientifico</th>
          <th className={styles.tableHeaderCell} />
        </tr>
      </thead>
      <tbody>
        {plants.map((plantSummaryResponse, index) => (
          <tr className={styles.tableBodyRow} key={plantSummaryResponse.id}>
            <td className={`${styles.tableBodyCell} ${styles.index}`}>{index + 1}</td>
            <td className={styles.tableBodyCell}>{plantSummaryResponse.scientific_name}</td>
            <td className={styles.tableBodyCell}>
              <Icons plantSummary={plantSummaryResponse} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

interface IconsProps {
  plantSummary: PlantSummaryResponse;
}

const Icons = ({ plantSummary }: IconsProps) => (
  <article className={styles.iconsContainer}>
    <Link
      to={`${plantSummary.id}/edit`}
      state={{ scientificName: plantSummary.scientific_name}}
    >
      <PencilIcon />
    </Link>
    {plantSummary.is_favorite && <StarIcon />}
    {!plantSummary.is_visible && <EyeOffIcon />}
  </article>
);

export default Table;
