const { message } = require("./message");

describe("message", () => {
  it("can go out", () => {
    const result = message(22, 1, 13);
    expect(result).toBe(`Dışarıya Çıkabilirsiniz`);
  });
  it("can't go out", () => {
    const result = message(68, 3, 9);
    expect(result).toBe(`Yaşınız 68 olduğu için sadece saat 10 ile 13.00 arası dışarı çıkabilirsiniz.`);
  })
  it("can't go out", () => {
    const result = message(11, 0, 12);
    expect(result).toBe('Hafta Sonu Dışarıya Çıkamazsınız ');
  })
  it("should revise your input", () => {
    const result = message('aa', 2, 11);
    expect(result).toBe(' Lütfen yaşınızı doğru girdiğinizden emin olun :)')
  })
  it("should revise your input", () => {
    const result = message(-3, 0, 2);
    expect(result).toBe(' Lütfen yaşınızı doğru girdiğinizden emin olun :)');
  })
  it("should revise your input", () => {
    const result = message('///', 5, 2);
    expect(result).toBe(' Lütfen yaşınızı doğru girdiğinizden emin olun :)');
  })
  it("should revise your input", () => {
    const result = message('88a', 5, 2);
    expect(result).toBe(' Lütfen yaşınızı doğru girdiğinizden emin olun :)');
  })
  it("should revise your input", () => {
    const result = message('6h67', 5, 2);
    expect(result).toBe(' Lütfen yaşınızı doğru girdiğinizden emin olun :)');
  })
  it("it should throw error", () => {
    expect(message(3, 12, 12)).toBe("Yaşınız 3 olduğu için saat 13.00 ile 16.00 arasi dışarı çıkabilirsiniz.");
  });

});