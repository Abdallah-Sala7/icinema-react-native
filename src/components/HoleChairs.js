import {TouchableOpacity, View} from 'react-native';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import { COLORS } from '../constants';

const HoleChairs = ({selecteHole}) => {
  const [mychairTiket, setMyChairTiket] = useState([]);
  const [bookedchair, setBookedChair] = useState([
    [1, 5],
    [1, 9],
    [1, 1],
    [2, 6],
    [2, 8],
    [3, 5],
    [3, 15],
    [3, 11],
  ]);
  const {cinema} = useSelector(state => state.choose);

  var column = [];
  var chairsInHole = [];

  for (let i = 1; i <= cinema.hole[selecteHole].column; i++) {
    let columnVal =
      cinema.hole[selecteHole].capacity / cinema.hole[selecteHole].column;

    for (let j = 1; j <= columnVal; j++) {
      let chairI = bookedchair.filter(item => {
        return item[0] === i && item[1] === j;
      });

      let chairChoosed = mychairTiket.filter(item => {
        return item[0] === i && item[1] === j;
      });

      chairsInHole.push(
        <>
          {
            <TouchableOpacity
              activeOpacity={0.8}
              disabled={chairI.length > 0}
              onPress={() => handleChooseChaie([i, j])}
              key={[i, j]}
              style={{
                width: 16,
                height: 16,
                backgroundColor:
                  chairI.length > 0
                    ? '#707070'
                    : chairChoosed.length > 0
                    ? COLORS.primary
                    : '#D4D4D4',
                borderRadius: 4,
              }}></TouchableOpacity>
          }
        </>,
      );
    }

    column.push(
      <View
        style={{
          flex: 1 / cinema.hole[selecteHole].column,
          flexDirection: 'row',
          gap: 1,
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {chairsInHole}
      </View>,
    );

    chairsInHole = [];
  }

  const handleChooseChaie = ([i, j]) => {
    const index = mychairTiket.findIndex(([a, b]) => a === i && b === j);

    if (index >= 0) {
      let newMyChairTiket = mychairTiket;
      newMyChairTiket.splice(index, 1);
      setMyChairTiket([...newMyChairTiket]);
    } else {
      setMyChairTiket([...mychairTiket, [i, j]]);
    }
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 10,
      }}>
      {column}
    </View>
  );
};

export default HoleChairs;
