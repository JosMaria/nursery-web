import type { PlantDataResponse } from '../types';
import { EyeOffIcon, PencilIcon, StarIcon } from '@/icons';

import styles from './scss/Table.module.scss';
import { Link } from 'react-router';

interface TableProps {
  plants: PlantDataResponse[];
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
        {plants.map((plantDataResponse, index) => (
          <tr className={styles.tableBodyRow} key={plantDataResponse.id}>
            <td className={`${styles.tableBodyCell} ${styles.index}`}>{index + 1}</td>
            <td className={styles.tableBodyCell}>{plantDataResponse.scientific_name}</td>
            <td className={styles.tableBodyCell}>
              <Icons
                plantId={plantDataResponse.id}
                isFavorite={plantDataResponse.is_favorite}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

interface IconsProps {
  plantId: number;
  isFavorite: boolean;
  isVisible?: boolean;
}

const Icons = ({ plantId, isFavorite, isVisible = false }: IconsProps) => (
  <article className={styles.iconsContainer}>
    {isFavorite && <StarIcon />}
    {!isVisible && <EyeOffIcon />}
    <Link to={`${plantId}/images`}>
      <PencilIcon />
    </Link>
  </article>
);

export default Table;
