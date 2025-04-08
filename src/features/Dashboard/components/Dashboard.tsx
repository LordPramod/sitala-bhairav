import {
  Badge,
  Box,
  Flex,
  FormatNumber,
  HStack,
  Stack,
  Stat,
  Text,
} from "@chakra-ui/react";
import { Chart, useChart } from "@chakra-ui/charts";
import { Area, AreaChart } from "recharts";

export const Dashboard = () => {
  // Example of chart

  const chart = useChart({
    data: [
      { value: 10 },
      { value: 16 },
      { value: 19 },
      { value: 15 },
      { value: 12 },
      { value: 15 },
      { value: 10 },
      { value: 18 },
    ],
    series: [{ name: "value", color: "teal.solid" }],
  });

  return (
    <Box border={"1px solid black"} p={5}>
      <Stack>
        <Flex gap={4}>
          <Box
            p={4}
            // border={"1px solid black"}
            borderRadius={"8px"}
            width={"346px"}
            display={"flex"}
            flexDir={"column"}
            gap={5}
            boxShadow={"lg"}
          >
            <HStack gap={2} align={"center"}>
              <Flex direction={"column"} gap={4}>
                <Text>Total disbursement on March</Text>
                <Stat.Root>
                  <HStack>
                    <Stat.ValueText>
                      <FormatNumber
                        value={5.2}
                        currency="NPR"
                        style="currency"
                      />
                    </Stat.ValueText>
                    <Badge variant={"surface"}>Lac</Badge>
                  </HStack>
                  <Stat.HelpText>Based on 2632 Loans</Stat.HelpText>
                </Stat.Root>
              </Flex>
              <Chart.Root width="28" height="12" chart={chart}>
                <AreaChart accessibilityLayer data={chart.data}>
                  {chart.series.map((item) => (
                    <defs key={item.name}>
                      <Chart.Gradient
                        id={`${item.name}-gradient`}
                        stops={[
                          { offset: "0%", color: item.color, opacity: 1 },
                          { offset: "100%", color: item.color, opacity: 0.01 },
                        ]}
                      />
                    </defs>
                  ))}

                  {chart.series.map((item) => (
                    <Area
                      key={item.name}
                      type="natural"
                      isAnimationActive={false}
                      dataKey={chart.key(item.name)}
                      fill={`url(#${item.name}-gradient)`}
                      stroke={chart.color(item.color)}
                      strokeWidth={2}
                    />
                  ))}
                </AreaChart>
              </Chart.Root>
            </HStack>
            <HStack gap={2}>
              <Stack gap={4}>
                <Text fontSize={"14px"}>Collected NPR on March</Text>
                <Stat.Root>
                  <HStack align={"center"}>
                    <Stat.ValueText>20</Stat.ValueText>
                    <Badge variant={"surface"}>K</Badge>
                  </HStack>
                  <Stat.HelpText>
                    <Flex gap={1}>
                      <Stat.UpIndicator />
                      <Text>2000 Rupees</Text>
                    </Flex>
                  </Stat.HelpText>
                </Stat.Root>
              </Stack>
              <Stack gap={4}>
                <Text fontSize={"14px"}>Pending NPR as of March</Text>
                <Stat.Root>
                  <HStack align={"center"}>
                    <Stat.ValueText>5</Stat.ValueText>
                    <Badge variant={"surface"}>K</Badge>
                  </HStack>
                  <Stat.HelpText>
                    <Flex gap={1}>
                      <Stat.DownIndicator />
                      <Text>5000 Rupees</Text>
                    </Flex>
                  </Stat.HelpText>
                </Stat.Root>
              </Stack>
            </HStack>
          </Box>
          <Box width={"346px"} boxShadow={"lg"}>
            <Text>Hello</Text>
          </Box>
          <Box boxShadow={"lg"} flexGrow={"100"}>
            <HStack>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
            </HStack>
          </Box>
        </Flex>
      </Stack>
    </Box>
  );
};
