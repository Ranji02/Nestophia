package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.House;
import com.example.demo.model.House_Details;
import com.example.demo.model.Reservation;
import com.example.demo.service.HouseService;

@RestController
public class HouseController {
    @Autowired
    private HouseService houseService;

    @PostMapping("/addHouse")
    public House addHouse(@RequestBody House house){
      return houseService.insertHouse(house);
    }

    @PostMapping("/requestReservation")
    public Reservation requestReservation(@RequestBody Reservation reservation){
      return houseService.insertReservation(reservation);
    }



    @GetMapping("/getAllHouses")
    public List<House> getAllHouses(){
      return houseService.getAllHouses();
    }

    @GetMapping("/getAllPendingRequests")
    public List<House_Details> getAllPendingRequests(){
      System.out.println(houseService.getAllPendingRequests());
      return houseService.getAllPendingRequests();
    }

    @PostMapping("/getMyReservations")
    public List<House_Details> getMyReservation(@RequestBody Reservation r){
      System.out.println("PG_ID: " + houseService.getMyReservation(r.getPgId()));
      return houseService.getMyReservation(r.getPgId());
    }

    @PostMapping("/getAllMyRRHouses")
    public List<House_Details> getAllMyRRHouses(@RequestBody House h){
      System.out.println("House owner id : " + h.getHouseOwnerId());
      return houseService.getAllMyRRHouses(h.getHouseOwnerId());
    }

    @PostMapping("/getMyHouse")
    public List<House> getMyHouses(@RequestBody House h){
      System.out.println("House owner id : " + h.getHouseOwnerId());
      return houseService.getMyHouses(h.getHouseOwnerId());
    }

    @PostMapping("/getTenantDetails")
    public List<House_Details> getTenanDetails(@RequestBody Reservation r){
      return houseService.getTenanDetails(r);
    }

    @PostMapping("/updateRequestHouse")
    public String updateHouseRequest(@RequestBody Reservation r){
      System.out.println("PG_ID11: " + r.getHouseId() + r.getPgId() + r.getNoOfPeople());
      return houseService.updateHouseRequest(r);
    }

    @PostMapping("/cancelReservation")
    public String cancelReservation(@RequestBody Reservation r){
      System.out.println("PG_ID: " + r.getHouseId() + r.getPgId());
      return houseService.cancelReservation(r);
    }

    @PostMapping("/deleteHouse")
    public String deleteHouse(@RequestBody House h){
      houseService.deleteHouse(h.getHouseId());
      return "{ \"1\" : \"House Deleted\"}";
    }
    @PostMapping("/updateHouse")
    public House updateStudent(@RequestBody House h){
      return houseService.updateHouse(h);
    }


  // @PostMapping("deleteHouse/{houseId}")
  // public String deleteHouse(@PathVariable Integer houseId){
  //   return houseService.deleteHouseById(houseId);
  // }   

  @PostMapping("/getAllAvailableHouses")
  public List<House> getAvailableHouses(@RequestBody House h){
    // userService.getUserById(user);
    // List<House> myList = houseService.getAvailableHouse(h);
    // for(int i = 0; i < myList.size(); i++) {
    //   System.out.println("Hello : " + myList.get(i));
    // }
    return houseService.getAvailableHouse(h) ;
  }
}
