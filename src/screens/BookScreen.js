import {StyleSheet, Text, View} from 'react-native';
import {useState} from 'react';
import {
  ChooseCinema,
  ChoosePayment,
  ChooseTime,
  MultiStep,
  RectButton,
} from '../components';
import {ButContainer, COLORS, CONTAINER} from '../constants';

const BookScreen = () => {
  const [step, setStep] = useState(0);

  const handleStep = () => {
    step < 4 ? setStep(step + 1) : setStep(4);
  };

  return (
    <View style={CONTAINER}>
      <MultiStep step={step} />

      {step === 0 ? (
        <ChooseCinema />
      ) : step === 1 ? (
        <ChooseTime />
      ) : step === 2 ? (
        <ChoosePayment />
      ) : (
        <View>
          <Text>Done</Text>
        </View>
      )}

      <View style={ButContainer}>
        <RectButton
          BGcolor={COLORS.primary}
          color={COLORS.white}
          handlePress={handleStep}>
          next
        </RectButton>
      </View>
    </View>
  );
};

export default BookScreen;

const styles = StyleSheet.create({});
