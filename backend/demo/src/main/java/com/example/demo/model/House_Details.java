package com.example.demo.model;

public class House_Details {
    public Integer house_id;
    public String pic1;
    public String house_name; 
    public String permissible_gender;
    public Integer available_space;
    public Integer total_space;
    public String city;
    public String bhk;
    public Double rent_amount;
    public String name;
    public String amenities;
    public String mobile;
    public String house_receipt;
    public String aadhar_card;
    public String address_line_1;
    public String address_line_2;
    public String email;
    public Integer no_of_people;
    public String status;
    public Integer pg_id;


    public House_Details(Integer house_id, String pic1, String house_name, String permissible_gender, Integer available_space, Integer total_space, String city, String bhk, Double rent_amount, String name, String amenities, String mobile, String house_receipt, String aadhar_card){
        this.house_id = house_id;
        this.pic1 = pic1;
        this.house_name = house_name;
        this.permissible_gender = permissible_gender;
        this.available_space = available_space;
        this.total_space = total_space;
        this.city = city;
        this.bhk = bhk;
        this.rent_amount = rent_amount;
        this.name = name;
        this.amenities = amenities;
        this.mobile = mobile;
        this.house_receipt = house_receipt;
        this.aadhar_card = aadhar_card;
    }

    public House_Details(Integer house_id, String pic1, String house_name, String permissible_gender, Integer available_space, Integer total_space, String address_line_1, String address_line_2, String city, String bhk, Double rent_amount, String name, String amenities, String mobile,String email, Integer no_of_people, String status){
        this.house_id = house_id;
        this.pic1 = pic1;
        this.house_name = house_name;
        this.permissible_gender = permissible_gender;
        this.available_space = available_space;
        this.total_space = total_space;
        this.address_line_1 = address_line_1;
        this.address_line_2 = address_line_2;
        this.city = city;
        this.bhk = bhk;
        this.rent_amount = rent_amount;
        this.name = name;
        this.amenities = amenities;
        this.mobile = mobile;
        this.email = email;
        this.no_of_people = no_of_people;
        this.status = status;
    }

    public House_Details(Integer house_id, String pic1, String house_name, String permissible_gender, Integer available_space, Integer total_space, String address_line_1, String address_line_2, String city, String bhk, Double rent_amount, String name, String amenities, String mobile, String email, Integer no_of_people, String status, String house_receipt, String aadhar_card, Integer pg_id){
        this.house_id = house_id;
        this.pic1 = pic1;
        this.house_name = house_name;
        this.permissible_gender = permissible_gender;
        this.available_space = available_space;
        this.total_space = total_space;
        this.address_line_1 = address_line_1;
        this.address_line_2 = address_line_2;
        this.city = city;
        this.bhk = bhk;
        this.rent_amount = rent_amount;
        this.name = name;
        this.amenities = amenities;
        this.mobile = mobile;
        this.email = email;
        this.no_of_people = no_of_people;
        this.status = status;
        this.house_receipt = house_receipt;
        this.aadhar_card = aadhar_card;
        this.pg_id = pg_id;
    }

    
    public House_Details(String name, String mobile, String email, String aadhar_card, Integer no_of_people, Integer house_id, Integer pg_id){
        this.name = name;
        this.mobile = mobile;
        this.email = email;
        this.aadhar_card = aadhar_card;
        this.no_of_people = no_of_people;
        this.house_id = house_id;
        this.pg_id = pg_id;
    }
}
