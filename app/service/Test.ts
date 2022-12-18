/*
 * @Author: sfy
 * @Date: 2022-12-17 23:09:28
 * @LastEditors: sfy
 * @LastEditTime: 2022-12-18 01:18:04
 * @FilePath: /showcase/app/service/Test.ts
 * @Description: update here
 */
import { Service } from 'egg';
import neo4j from 'neo4j-driver';

/**
 * Test Service
 */
export default class Test extends Service {

  /**
   * sayHi to you
   * @param name - your name
   */
  public async sayHi(name: string) {

    const uri = 'bolt://112.124.8.236:7687';
    const user = 'neo4j';
    const password = 'tujiu@304';

    const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
    try {
      const result = await this.findPerson(driver);
      return result;
    } catch (error) {
      console.error(`Something went wrong: ${error}`);
    } finally {
      // Don't forget to close the driver connection when you're finished with it.
      await driver.close();
    }

    return `hi, ${name} --aa11`;


  }
  public async findPerson(driver) {

    const session = driver.session();
    try {
      const readResult = await session.run('MATCH(n:PERSON) RETURN n');
      const arr: any = [];
      readResult.records.forEach(record => {
        console.log(record._fields[0].properties);
        arr.push(record._fields[0].properties);
      });
      // readResult.records.forEach(record => {
      //   console.log(`Found person: ${record.get('name')}`);
      // });
      return arr;
    } catch (error) {
      console.error(`Something went wrong: ${error}`);
    } finally {
      await session.close();
    }
  }
}
