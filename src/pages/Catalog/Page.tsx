import { StatusType } from "@nursery/types/commons";
import { traduceStatus } from "@nursery/utils";

type CardType = {
  id: string;
  commonName: string;
  scientificName: string;
  scientistLastnameInitial?: string;
  family: string;
  status: StatusType;
  photoUrl: string;
};

const PLANTS: CardType[] = [
  {
    id: '1',
    commonName: 'flor de navidad',
    scientificName: 'euphorbia pulcherrima',
    family: 'euphorbiaceae',
    status: 'AVAILABLE',
    photoUrl: 'https://media.istockphoto.com/id/1394911209/es/foto/plantas-de-follaje-de-interior.jpg?s=612x612&w=0&k=20&c=4oD_R7HEm89-9eLqyDs-KFHzBIFG8yWWV7wsvl2odXY='
  },
  {
    id: '2',
    commonName: 'acacia orrida',
    scientificName: 'acacia orrida',
    family: 'fabaceae',
    status: 'IN_CONSERVATION',
    photoUrl: 'https://img.freepik.com/foto-gratis/hermosas-modernas-plantas-deco_23-2149198578.jpg?size=626&ext=jpg'
  },
  {
    id: '3',
    commonName: 'agave',
    scientificName: 'Agave tequilero',
    family: 'asparagaceae',
    status: 'NON_EXISTENT',
    photoUrl: 'https://images.unsplash.com/photo-1701441006477-5ba242215ded?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGxhbnRhcyUyMG9ybmFtZW50YWxlc3xlbnwwfHwwfHx8MA=='
  },
  {
    id: '4',
    commonName: 'aji ornamental',
    scientificName: 'capsicum annuum',
    scientistLastnameInitial: 'l',
    family: 'solanaceae',
    status: 'AVAILABLE',
    photoUrl: 'https://www.elespectador.com/resizer/ThC82Pba-rirRgv0T0tLf5BzTG4=/920x613/filters:quality(60):format(jpeg)/www.elespectador.com/resizer/_DKw4aFvGZHQ6mUsK3y-Q70Awgo=/arc-anglerfish-arc2-prod-elespectador/public/AMAJMZFBAJDQNDBKC5ZBDION6U.jpg'
  },
  {
    id: '5',
    commonName: 'ajuga',
    scientificName: 'ajuga reptans',
    scientistLastnameInitial: 'l',
    family: 'lamiaceae',
    status: 'IN_CONSERVATION',
    photoUrl: 'https://www.infocampo.com.ar/wp-content/uploads/2020/08/orquideas-plantas-750x563-1-450x338.webp'
  },
  {
    id: '6',
    commonName: 'alamo',
    scientificName: 'populus x canadensis moench',
    family: 'salicaceae',
    status: 'NON_EXISTENT',
    photoUrl: 'https://i0.wp.com/www.sembrar100.com/wp-content/uploads/co%CC%81mo-sembrar-cactus-2.jpg?resize=300,200&ssl=1'
  },
];

export const CatalogPage = () => {
  return (
    <section>
      {PLANTS.map(plant => (
        <article key={plant.id}>
          <img src={plant.photoUrl} alt={plant.commonName} />
          <div>
            <p>{plant.commonName}</p>
            <p>{plant.scientificName} {plant.scientistLastnameInitial}</p>
            <p>{plant.family}</p>
            <p>{traduceStatus(plant.status)}</p>
          </div>
        </article>
      ))}
    </section>
  );
};
