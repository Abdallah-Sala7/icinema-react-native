import {Image, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, SIZES} from '../constants';
import {useDispatch, useSelector} from 'react-redux';
import {setPayment} from '../app/reducers/chooseSlice';

const PaymentCard = ({img, title, disc}) => {
  const {payment} = useSelector(state => state.choose);
  const dispatch = useDispatch();
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.gray,
        padding: 10,
        borderRadius: SIZES.radius,
        marginBottom: 10,
      }}>
      <Image
        source={img}
        style={{width: 40, height: 40, marginEnd: 5, resizeMode: 'contain'}}
      />

      <View style={{marginEnd: 'auto'}}>
        <Text style={{color: COLORS.white, marginBottom: 5}}>{title}</Text>

        <Text style={{color: COLORS.white}}>{disc}</Text>
      </View>

      <TouchableOpacity
        onPress={() => dispatch(setPayment(title))}
        style={{
          width: 40,
          height: 20,
          backgroundColor: '#D4D4D4',
          borderRadius: 16,
          padding: 1,
        }}>
        <View
          style={{
            width: 18,
            height: 18,
            backgroundColor: payment === title ? COLORS.primary : COLORS.white,
            borderRadius: 16,
            marginStart: payment === title ? 'auto' : 0,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default PaymentCard;
