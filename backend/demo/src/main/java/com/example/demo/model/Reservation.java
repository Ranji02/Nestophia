package com.example.demo.model;
import javax.persistence.*;

@Entity
@Table(name = "reservation")
public class Reservation {
    @Id
    @Basic

    @Column(name = "house_id")
    private Integer house_id;

    @Column(name = "pg_id")
    private Integer pg_id;

    @Column(name = "no_of_people")
    private Integer no_of_people;

    @Column(name = "status")
    private String status;

    public Reservation(){

    }

    public Reservation(Integer house_id, Integer pg_id, Integer no_of_people, String status){
        this.house_id = house_id;
        this.pg_id = pg_id;
        this.no_of_people = no_of_people;
        this.status = status;
        System.out.println("Hello Reservetion");
    }

    public Integer getHouseId(){
        return house_id;
    }

    public Integer getPgId(){
        return pg_id;
    }

    public Integer getNoOfPeople(){
        return no_of_people;
    }

    public String getStatus(){
        return status;
    }

    public void setHouseId(Integer house_id){
        this.house_id = house_id;
    }

    public void setPgId(Integer pg_id){
        this.pg_id = pg_id;
    }

    public void setNoOfPeople(Integer no_of_people){
        this.no_of_people = no_of_people;
    }

    public void setStatus(String status){
        this.status = status;
    }

    @Override
    public String toString() {
    return "Reservation{house_id=" + house_id + ", pg_id = " + pg_id  + ", no_of_people = '" + no_of_people
                +  "', status = '" + status + "' }";
    }
}
