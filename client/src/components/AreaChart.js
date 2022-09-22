import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const AreaChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer width='100%' height={300}>
      <AreaChart data={data} margin={{ top: 50 }}>
        <defs>
          <linearGradient id='colorCount' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='#2cb1bc' stopOpacity={0.7} />
            <stop offset='95%' stopColor='#2cb1bc' stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='date' />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Area
          type='monotone'
          dataKey='count'
          stroke='#2cb1bc'
          fillOpacity={1}
          fill='url(#colorCount)'
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComponent;
