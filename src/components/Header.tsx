import { Box, Center, CenterProps, Text} from "@chakra-ui/react";

type Props = CenterProps

export const Header = ({ ...centerProps }: Props) => {
    return (
        <Box m={4}>
            <Center bg='green.400' h='60px' color='white' { ...centerProps }>
                <Text fontSize='2xl' fontWeight='bold'>
                    Todoリスト
                </Text>
            </Center>
        </Box>
    )
}