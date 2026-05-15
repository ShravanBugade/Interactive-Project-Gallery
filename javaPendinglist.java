package com.example.demo.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class PendingController {

    @GetMapping("/pending-list")
    public ResponseEntity<Map<String, Object>> getPendingList(
            @RequestParam String cif) {

        System.out.println("Received request for CIF: " + cif);

        Map<String, Object> response = new HashMap<>();

        // CIF001 → FAILURE (like your 400 case)
        if ("CIF001".equals(cif)) {

            response.put("status", "FAILURE");
            response.put("error", "Server error");

            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(response);
        }

        // CIF002 → EMPTY
        else if ("CIF002".equals(cif)) {

            response.put("status", "EMPTY");
            response.put("data", Collections.emptyList());

            return ResponseEntity.ok(response);
        }

        // SUCCESS (default)
        else {

            List<Map<String, Object>> data = new ArrayList<>();

            data.add(createAccount(1, cif, "Account A", 5000));
            data.add(createAccount(2, cif, "Account B", 12000));
            data.add(createAccount(3, cif, "Account C", 12000222));

            response.put("status", "SUCCESS");
            response.put("data", data);

            return ResponseEntity.ok(response);
        }
    }

    private Map<String, Object> createAccount(int id, String cif, String name, int amount) {
        Map<String, Object> map = new HashMap<>();
        map.put("id", id);
        map.put("cif", cif);
        map.put("name", name);
        map.put("amount", amount);
        return map;
    }
}