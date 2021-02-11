import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions,ScrollView } from 'react-native';
import areaImage from "../../assets/Ipswich.jpg";
const IpswichScreen=()=>{
    return(
        <View style={styles.container}>
            <Image source={areaImage} style={styles.image}/>
            <ScrollView>
                <Text style={styles.paragraph}>Ipswich (/ˈɪpswɪtʃ/ (About this soundlisten)) is a historic county town in Suffolk, England. The town is located in East Anglia about 10 miles (16 km) away from the mouth of the River Orwell and the North Sea. Ipswich is both on the Great Eastern Main Line railway and the A12 road, it is 66 miles (106 km) north-east of London, 54 miles (89 km) east-southeast of Cambridge, and 45 miles (72 km) south of Norwich. Ipswich is surrounded by two Areas of Outstanding Natural Beauty (AONB); Suffolk Coast and Heaths and Dedham Vale.</Text>
                <Text style={styles.paragraph}>Ipswich's modern name is derived from the medieval name Gippeswic, probably taken either from an Anglo-Saxon personal name or from an earlier name given to the Orwell Estuary (although unrelated to the name of the River Gipping).[1][2] It has also been known as Gyppewicus and Yppswyche.[3] The town has been continuously occupied since the Saxon period,[3] and is contested to be one of the oldest towns in the United Kingdom.[4] Ipswich was a settlement of great economic importance to England throughout its history, particularly in trade.[5] The town's historical dock, present-day Ipswich Waterfront, was known as the largest and most important dock in the kingdom.[5][6]</Text>
                <Text style={styles.paragraph}>Ipswich is a non-metropolitan district and is a large settlement despite its town status. The urban development of Ipswich overspills the borough boundaries significantly, with 75% of the town's population living within the borough at the time of the 2011 Census, when it was the fourth-largest urban area in the United Kingdom's East of England region, and the 42nd-largest urban area in England and Wales.[7] In 2011, the town of Ipswich was found to have a population of 133,384,[8][9] while the Ipswich built-up area is estimated to have a population of approximately 180,000 in 2011.[7]</Text>
                <Text style={styles.paragraph}>The town is split into various quarters, with central and the waterfront drawing the most footfall.[10] Central is home to the town's retail shopping and the historic town square, the Cornhill. The waterfront is located south of the town centre on the bend of the River Orwell and is a picturesque setting housing the town's impressive marina. The waterfront was historically an industrial port but has since been transformed into a trendy area lined with high-rise apartment buildings, restaurants, bars and cafés. The waterfront is also home to one of the UK's newest universities, the University of Suffolk, which was formed in 2016.[11]</Text>
                <Text style={styles.paragraph}>Ipswich has become a tourist hotspot in the UK with 3.5 million people reported to have visited the county town in 2016.[12] In 2020, Ipswich was ranked as an emerging global tourist destination by TripAdvisor.[13] Ipswich was voted as the 7th most desirable place to live and work in England by the Royal Mail in 2017.[14] In 2007, Ipswich was awarded the cleanest town award,[15] and in 2015, Ipswich was rated as the third happiest place to live in the UK.[16]</Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({    
    container: {        
        flex: 1,        
        backgroundColor: '#fff',        
        alignItems: 'center',        

    },
    paragraph:{
        marginBottom:10,
        paddingLeft:15,
        paddingRight:15
    },
    image:{
        width:Dimensions.get('screen').width, 
        height:150,
        marginBottom:20
    }
});

export default IpswichScreen;