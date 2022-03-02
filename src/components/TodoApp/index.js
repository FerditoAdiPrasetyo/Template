import { Card } from 'antd';
import TableComponent from './TableComponent';
import CreateModal from './Modal/CreateModal';
const index = () => {
  return (
  <div>
    <Card>
      <CreateModal/>
      <TableComponent/>
    </Card>
  </div>
  );
};
export default index;
