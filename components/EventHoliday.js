import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { PaperProvider, Text } from "react-native-paper";
import { GetHolidayListByAdmin } from "./Api/api";
import EventBox from "./comman/eventBox";
import AddEventForm from "./forms/AddEventForm";

export const EventHoliday = () => {
  const IntialFormState = {
    id: "",
    start_date: "",
    end_date: "",
    event: "",
    event_type: "",
  };
  const [HolidayList, setHolidayList] = useState([]);
  const [apicall, setapicall] = useState(false);

  const [openEventForm, setOpenEventForm] = useState(false);

  const GetHolidayListFuntion = async () => {
    const response = await GetHolidayListByAdmin();
    let { holiday } = response;

    setHolidayList(holiday.data || []);
    setapicall(false);
  };

  useEffect(() => {
    GetHolidayListFuntion();
  }, [apicall]);
  return (
    <PaperProvider>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text variant="headlineMedium">Event & Holidays</Text>
          <TouchableOpacity
            style={{
              fontSize: 15,
              backgroundColor: "green",

              padding: 10,

              borderRadius: 20,
            }}
            onPress={() => {
              setOpenEventForm(true);
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Add Event
            </Text>
          </TouchableOpacity>
        </View>{" "}
        <ScrollView vertical={true}>
          {(HolidayList || []).map((item) => {
            return (
              <>
                <EventBox data={item} setapicall={setapicall} />
              </>
            );
          })}
        </ScrollView>
      </View>
      <AddEventForm
        openEventForm={openEventForm}
        setOpenEventForm={setOpenEventForm}
        setapicall={setapicall}
        data={IntialFormState}
        type={"create"}
      />
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10, // Remove quotes and "px"
    marginLeft: 10, // Remove quotes and "px"
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: "100px",
    marginBottom: 15,
    justifyContent: "space-between",
  },
});
