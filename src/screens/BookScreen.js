import {StyleSheet, Text, View} from 'react-native';
import {useState} from 'react';
import {
  ChooseCinema,
  ChoosePayment,
  ChooseTime,
  MultiStep,
  RectButton,
} from '../components';
import {COLORS, CONTAINER} from '../constants';

const BookScreen = () => {
  const [step, setStep] = useState(0);

  const handleStep = () => {
    step < 4 ? setStep(step + 1) : setStep(0);
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

      <RectButton handlePress={handleStep} BGcolor={COLORS.primary}>
        <Text>Next</Text>
      </RectButton>
    </View>
  );
};

export default BookScreen;

const styles = StyleSheet.create({});
