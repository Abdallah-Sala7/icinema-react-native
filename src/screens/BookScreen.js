import {ScrollView, Text, View} from 'react-native';
import {useState} from 'react';
import {
  ChooseCinema,
  ChoosePayment,
  ChooseTime,
  MultiStep,
  PaymentDone,
  RectButton,
} from '../components';
import {COLORS, CONTAINER} from '../constants';
import {useSelector} from 'react-redux';

const BookScreen = () => {
  const [step, setStep] = useState(0);

  const {cinema, chair, payment} = useSelector(state => state.choose);

  const handleStep = () => {
    if (step === 0) {
      cinema ? setStep(step + 1) : alert('Please choose cinema');
    } else if (step === 1) {
      chair.length > 0 ? setStep(step + 1) : alert('Please choose chair');
    } else if (step === 2) {
      payment ? setStep(step + 1) : alert('Please choose payment');
    } else {
      setStep(3);
    }
  };

  return (
    <View style={[CONTAINER, {paddingBottom: 10}]}>
      <MultiStep step={step} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          paddingBottom: 30,
          flex: 1,
        }}
        
        contentContainerStyle={{flexGrow: 1}}>

        {step === 0 ? (
          <ChooseCinema />
        ) : step === 1 ? (
          <ChooseTime />
        ) : step === 2 ? (
          <ChoosePayment />
        ) : (
          <PaymentDone />
        )}
      </ScrollView>

      {step !== 3 && (
        <View
          style={{
            backgroundColor: COLORS.dark,
            padding: 10,
            alignItems: 'center',
          }}>
          <RectButton
            BGcolor={COLORS.primary}
            color={COLORS.dark}
            handlePress={handleStep}>
            next
          </RectButton>
        </View>
      )}
    </View>
  );
};

export default BookScreen;
