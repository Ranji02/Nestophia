package com.example.demo.model;
import javax.persistence.*;

@Entity
@Table(name = "house")
// @SecondaryTable(name = "amenities", pkJoinColumns = @PrimaryKeyJoinColumn(name = "house_id", referencedColumnName = "house_id"))
// @SecondaryTable(name = "house_pictures", pkJoinColumns = @PrimaryKeyJoinColumn(name = "house_id", referencedColumnName = "house_id"))
// @SecondaryTable(name = "house_availability", pkJoinColumns = @PrimaryKeyJoinColumn(name = "house_id", referencedColumnName = "house_id"))
// @SecondaryTable(name = "house_document", pkJoinColumns = @PrimaryKeyJoinColumn(name = "house_id", referencedColumnName = "house_id"))

public class House{

    @Id
    @Basic

    // @Column(name = "house_id", table = "house")
    @Column(name = "house_id")
    private Integer house_id;

    // @Column(name = "houseowner_id", table = "house")
    @Column(name = "houseowner_id")
    private Integer houseowner_id;

    // @Column(name = "house_name", table = "house")
    @Column(name = "house_name")
    private String house_name;

    // @Column(name = "permissible_gender", table = "house")
    @Column(name = "permissible_gender")
    private String permissible_gender;

    // @Column(name = "bhk", table = "house")
    @Column(name = "bhk")
    private String bhk;

    // @Column(name = "rent_amount", table = "house")
    @Column(name = "rent_amount")
    private Double rent_amount;

    // @Column(name = "total_space", table = "house")
    @Column(name = "total_space")
    private Integer total_space;

    // @Column(name = "address_line_1", table = "house")
    @Column(name = "address_line_1")
    private String address_line_1;

    // @Column(name = "address_line_2", table = "house")
    @Column(name = "address_line_2")
    private String address_line_2;

    // @Column(name = "city", table = "house")
    @Column(name = "city")
    private String city;

    // @Column(name = "state", table = "house")
    @Column(name = "state")
    private String state;

    // @Column(name = "pincode", table = "house")
    @Column(name = "pincode")
    private String pincode;

    @Column(name = "amenities")
    private String amenities;

    // // @Column(name = "ac", table = "amenities")
    // private Integer ac;

    // // @Column(name = "water", table = "amenities")
    // private Integer water;

    // // @Column(name = "wifi", table = "amenities")
    // private Integer wifi;

    // // @Column(name = "power_backup", table = "amenities")
    // private Integer power_backup;

    // // @Column(name = "parking_space", table = "amenities")
    // private Integer parking_space;

    // @Column(name = "pic1", table = "house_pictures")
    @Column(name = "pic1")
    private String pic1;

    // @Column(name = "pic2", table = "house_pictures")
    @Column(name = "pic2")
    private String pic2;

    // @Column(name = "pic3", table = "house_pictures")
    @Column(name = "pic3")
    private String pic3;

    // @Column(name = "pic4", table = "house_pictures")
    @Column(name = "pic4")
    private String pic4;

    // @Column(name = "pic5", table = "house_pictures")
    @Column(name = "pic5")
    private String pic5;

    // @Column(name = "available_space", table = "house_availability")
    @Column(name = "available_space")
    private Integer available_space;

    // @Column(name = "status", table = "house_availability")
    @Column(name = "status")
    private String status;

    // @Column(name = "house_receipt", table = "house_document")
    @Column(name = "house_receipt")
    private String house_receipt;

//     CREATE TABLE "house" (
// 	"house_id"	INTEGER,
// 	"houseowner_id"	INTEGER NOT NULL,
// 	"house_name"	VARCHAR NOT NULL,
// 	"permissible_gender" TEXT NOT NULL,
// 	"bhk"	VARCHAR NOT NULL,
// 	"amenities" VARCHAR NOT NULL,
// 	"rent_amount"	BIGINT NOT NULL,
// 	"total_space"	INTEGER NOT NULL,
// 	"available_space"	INTEGER NOT NULL,
// 	"address_line_1"	VARCHAR NOT NULL,
// 	"address_line_2"	VARCHAR NOT NULL,
// 	"city"	VARCHAR NOT NULL,
// 	"state"	VARCHAR NOT NULL,
// 	"pincode"	VARCHAR NOT NULL,
// 	"house_receipt"	VARCHAR NOT NULL,
// 	"pic1"	VARCHAR NOT NULL,
// 	"pic2"	VARCHAR,
// 	"pic3"	VARCHAR,
// 	"pic4"	VARCHAR,
// 	"pic5"	VARCHAR,
// 	"status" VARCHAR NOT NULL,
// 	PRIMARY KEY("house_id")
// );

    public House(){

    }

    
    public House(Integer house_id, Integer houseowner_id, String house_name, String permissible_gender, String bhk, String amenities, Double rent_amount, Integer total_space, Integer available_space, String address_line_1, String address_line_2, String city, String state, String pincode, String house_receipt, String pic1, String pic2, String pic3, String pic4, String pic5, String status){
        this.house_id = house_id;
        this.houseowner_id = houseowner_id;
        this.house_name = house_name;
        this.permissible_gender = permissible_gender;
        this.bhk = bhk;
        this.amenities = amenities;
        this.rent_amount = rent_amount;
        this.total_space = total_space;
        this.available_space = available_space;
        this.address_line_1 = address_line_1;
        this.address_line_2 = address_line_2;
        this.city = city;
        this.state = state;
        this.pincode = pincode;
        this.house_receipt = house_receipt;
        this.pic1 = pic1;
        this.pic2 = pic2;
        this.pic3 = pic3;
        this.pic4 = pic4;
        this.pic5 = pic5;
        this.status = status;
        // System.out.println("Hello");
    }


    public Integer getHouseOwnerId(){
        return houseowner_id;
    }
    public Integer getHouseId(){
        return house_id;
    }
    public String getHouseName(){
        return house_name;
    }
    public String getPermissibleGender(){
        return permissible_gender;
    }
    public String getbhk(){
        return bhk;
    }
    public Double getRentAmount(){
        return rent_amount;
    }
    public Integer getTotalSpace(){
        return total_space;
    }
    public String getAddressLine1(){
        return address_line_1;
    }
    public String getAddressLine2(){
        return address_line_2;
    }
    public String getCity(){
        return city;
    }
    public String getState(){
        return state;
    }
    public String getPincode(){
        return pincode;
    }



    public void setHouseOwnerId(Integer houseowner_id){
        this.houseowner_id = houseowner_id;
    }
    public void setHouseId(Integer house_id){
        this.house_id = house_id;
    }
    public void setHouseName(String house_name){
        this.house_name = house_name;
    }
    public void setPermissibleGender(String permissible_gender){
        this.permissible_gender = permissible_gender;
    }
    public void setbhk(String bhk){
        this.bhk = bhk;
    }
    public void setRentAmount(Double rent_amount){
        this.rent_amount = rent_amount;
    }
    public void setTotalSpace(Integer total_space){
        this.total_space = total_space;
    }
    public void setAddressLine1(String address_line_1){
        this.address_line_1 =  address_line_1;
    }
    public void setAddressLine2(String address_line_2){
        this.address_line_2 = address_line_2;
    }
    public void setCity(String city){
        this.city = city;
    }
    public void setState(String state){
        this.state = state;
    }
    public void setPincode(String pincode){
        this.pincode = pincode;
    }
    

    // public Integer getAC(){
    //     return ac;
    // }
    // public Integer getWater(){
    //     return water;
    // }
    // public Integer getWifi(){
    //     return wifi;
    // }
    // public Integer getPowerBackup(){
    //     return power_backup;
    // }
    // public Integer getParkingSpace(){
    //     return parking_space;
    // }



    // public void setAC(Integer ac){
    //     this.ac = ac;
    // }
    // public void setWater(Integer water){
    //     this.water = water;
    // }
    // public void setWifi(Integer wifi){
    //     this.wifi = wifi;
    // }
    // public void setPowerBackup(Integer power_backup){
    //     this.power_backup = power_backup;
    // }
    // public void setParkingSpace(Integer parking_space){
    //     this.parking_space = parking_space;
    // }

    public String getAmenities(){
        return amenities;
    }


    public void setAmenities(String amenities){
        this.amenities = amenities;
    }

    public String getPic1(){
        return pic1;
    } 
    public String getPic2(){
        return pic2;
    } 
    public String getPic3(){
        return pic3;
    } 
    public String getPic4(){
        return pic4;
    } 
    public String getPic5(){
        return pic5;
    } 



    public void setPic1(String pic1){
        this.pic1 = pic1;
    }
    public void setPic2(String pic2){
        this.pic2 = pic2;
    }
    public void setPic3(String pic3){
        this.pic3 = pic3;
    }
    public void setPic4(String pic4){
        this.pic4 = pic4;
    }
    public void setPic5(String pic5){
        this.pic5 = pic5;
    }



    public Integer getAvailableSpace(){
        return available_space;
    }
    public String getStatus(){
        return status;
    }



    public void setAvailableSpace(Integer available_space){
        this.available_space = available_space;
    }
    public void setStatus(String status){
        this.status = status;
    }



    public String getHouseReceipt(){
        return house_receipt;
    }



    public void setHouseReceipt(String house_receipt){
        this.house_receipt = house_receipt;
    }


    // this.house_id = house_id;
    // this.houseowner_id = houseowner_id;
    // this.house_name = house_name;
    // this.permissible_gender = permissible_gender;
    // this.bhk = bhk;
    // this.amenities = amenities;
    // this.rent_amount = rent_amount;
    // this.total_space = total_space;
    // this.available_space = available_space;
    // this.address_line_1 = address_line_1;
    // this.address_line_2 = address_line_2;
    // this.city = city;
    // this.state = state;
    // this.pincode = pincode;
    // this.house_receipt = house_receipt;
    // this.pic1 = pic1;
    // this.pic2 = pic2;
    // this.pic3 = pic3;
    // this.pic4 = pic4;
    // this.pic5 = pic5;
    // this.status = status;


    @Override
    public String toString() {
    return "House{house_id=" + house_id + ", houseowner_id = " + houseowner_id  + ", house_name = '" + house_name
                + "' , permissible_gender = '" + permissible_gender + "', bhk = '" + bhk  + "', amenities = '" + amenities 
                + "', rent_amount = " + rent_amount + ", total_space = " + total_space + "', available_space = " + available_space 
                + ", address_line_1 = '" + address_line_1 + "', address_line_2 = '" + address_line_2 + "', city = '" + city 
                + "', state = '" + state + "', pincode = '" + pincode + "', house_receipt = '" + house_receipt  +  "', pic1 = '" + pic1 
                + "', pic2 = '" + pic2 + "', pic3 = '" + pic3 + "', pic4 = '" + pic4 + "', pic5 = '" + pic5  + "', status = '" + status + "' }";
    }

}