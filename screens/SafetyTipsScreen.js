import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import React from "react";
import Card from "../components/Card";
import { RFPercentage } from "react-native-responsive-fontsize";

const SafetyTipsScreen = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <Text style={styles.title}>Get Your Vaccine</Text>
      <Text style={styles.subTitle}>‣ Why get a vaccine?</Text>
      <Text style={styles.paragraph}>
        Get a vaccine to protect yourself, your loved ones and your community.
        Vaccines are effective at preventing severe illness and death from the
        coronavirus and the Delta variant. Get a vaccine booster shot as soon as
        it is recommended for you to increase your protection.{"\n"}
        {"\n"} Vaccines are safe and effective. Medical experts carefully tested
        the vaccines among thousands of adults with diverse backgrounds.
      </Text>
      <Text style={styles.subTitle}>‣ Find a vaccine location near you</Text>
      <Text style={styles.paragraph}>
        COVID-19 vaccines are free and available to anyone who wants one,
        regardless of their immigration or health insurance status. There are
        three easy ways to find a nearby location where you can get the COVID-19
        vaccine:{"\n"}
        {"\n"}Search vaccines.gov{"\n"}
        {"\n"}Text your zip code to 438829. {"\n"}
        {"\n"}Call 1-800-232-0233.
      </Text>
      <Text style={styles.subTitle}>
        ‣ Wear a mask in indoor public places.
      </Text>
      <Text style={styles.paragraph}>
        Vaccines will protect you from severe illness and death. After you are
        fully vaccinated, wear a mask in indoor public places. You can still be
        infected and transmit the virus to others. {"\n"}If you are not
        vaccinated, get your vaccine, and wear a mask in indoor public places.{" "}
        {"\n"}Make sure your mask covers your nose and mouth and secure it under
        your chin.
      </Text>
      <Text style={styles.subTitle}>‣ Stay 6 feet away from others.</Text>
      <Text style={styles.paragraph}>
        Inside your home: Avoid close contact with people who are sick. {"\n"}
        Outside your home: Remember that some people without symptoms may spread
        the virus. Stay at least 6 feet (about two arm lengths) from other
        people.
      </Text>
      <Text style={styles.subTitle}>
        ‣ Avoid crowds and poorly ventilated indoor spaces.
      </Text>
      <Text style={styles.paragraph}>
        Avoid crowded places like restaurants, bars, fitness centers, or movie
        theaters. {"\n"}Avoid indoor spaces that do not offer fresh air from the
        outdoors. {"\n"}If indoors, bring in fresh air by opening windows and
        doors.
      </Text>
      <Text style={styles.subTitle}>‣ Wash your hands often.</Text>
      <Text style={styles.paragraph}>
        Wash your hands often with soap and water for at least 20 seconds.{" "}
        {"\n"}If soap and water are not available, use a hand sanitizer that
        contains at least 60% alcohol. Cover all surfaces of your hands and rub
        them together until they feel dry. {"\n"}Avoid touching your eyes, nose,
        and mouth with unwashed hands.
      </Text>
      <Text style={styles.title}>Vaccine Facts</Text>
      <Text style={styles.subTitle}>‣ How do vaccines work?</Text>
      <Text style={styles.paragraph}>
        COVID-19 vaccines help our bodies develop immunity to the virus that
        causes COVID-19 without us having to get the illness.{"\n"}When we get a
        vaccine, it activates our immune response. This helps our bodies learn
        to fight off the virus without the danger of an actual infection. If we
        are exposed to the virus in the future, our immune system “remembers”
        how to fight it.{"\n"}All COVID-19 vaccines, authorized by the U.S. Food
        and Drug Administration, provide significant protection against serious
        illness and hospitalization due to COVID-19.{"\n"}Again, it takes time
        for your body to build immunity after vaccination, so you won’t have
        full protection until 2 weeks after your final dose.
      </Text>
      <Text style={styles.subTitle}>
        ‣ What are the most common side effects?
      </Text>
      <Text style={styles.paragraph}>
        After getting vaccinated, you might have some side effects, which are
        normal signs that your body is building protection. Common side effects
        are pain, redness and swelling in the arm where you received the shot,
        as well as tiredness, headache, muscle pain, chills, fever and nausea.
        These side effects could affect your ability to do daily activities, but
        they should go away in a few days
      </Text>
      <Text style={styles.subTitle}>‣ Are COVID-19 vaccines safe?</Text>
      <Text style={styles.paragraph}>
        COVID-19 vaccines are safe and effective. COVID-19 vaccines are being
        held to the same safety standards as other common vaccines. Several
        expert and independent groups evaluate the safety of vaccines being
        given to people in the United States. Medical experts carefully tested
        the vaccines among thousands of adults with diverse backgrounds.
      </Text>
      <Text style={styles.subTitle}>‣ How do I protect my child?</Text>
      <Text style={styles.paragraph}>
        Help protect your whole family by getting yourself vaccinated as soon as
        you can. {'\n'}Get your children vaccinated as soon as they're eligible.
        {'\n'}Ensure everyone in your family wears a mask when they are indoors in
        public places.
      </Text>
    </ScrollView>
  );
};

export default SafetyTipsScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    alignSelf: "center",
    fontWeight: "bold",
    marginVertical: 15,
    color: "darkblue",
  },
  subTitle: {
    fontSize: 30,
    color: "darkgreen",
    marginLeft: 15,
    marginTop: 5,
    fontWeight: "bold",
  },
  paragraph: {
    fontSize: 25,
    marginVertical: 3,
    marginLeft: 15,
    marginRight: 15,
  },
});
