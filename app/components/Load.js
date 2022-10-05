import { Spinner, HStack } from 'native-base'
import { Text } from 'react-native'

export default function Load({ msg }) {
  return (
    // <Text>ok</Text>
    <HStack space={2} justifyContent="center">
      <Spinner size="lg" />
    </HStack>
  )
}