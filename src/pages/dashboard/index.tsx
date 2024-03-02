import { salesData, salesTableColumn } from '../../utils/data';
import './styles.scss';
import { Table } from 'antd'
const DashboardIndex = () => {

  return (
    <div className='dashboard_page'>
      <Table
        scroll={{ x: 1000 }}
        className="custom_table"
        dataSource={salesData}
        columns={salesTableColumn}
        bordered={false}
        // pagination={{ total: salesData?.orders?.total || 0, pageSize: salesData?.orders?.per_page || 10, current: salesData?.orders?.current_page || 1, onChange: (p) => getScrenData({ s: searchValue, p: `${p}` }) }}
        rowKey="id"

      />
    </div>
  );
}

export default DashboardIndex;